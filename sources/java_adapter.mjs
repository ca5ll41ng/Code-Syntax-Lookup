// sources/java_adapter.mjs
// OpenJDK src/**.java 的 javadoc → corpus/java/en/**.md（Java 无官方中文，全部 lang=en）
// 范围：审计相关模块白名单；仅提取带 javadoc 的 public/protected 类与成员
// 另：ANTLR grammars-v4 的 JavaParser.g4 → 每条产生式一个 grammar 条目
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'raw', 'openjdk', 'src');
const G4 = path.join(ROOT, 'raw', 'grammars-v4', 'java', 'java', 'JavaParser.g4');
const OUT = path.join(ROOT, 'corpus', 'java');
const UPDATED = new Date().toISOString().slice(0, 10);
const LICENSE = 'GPL-2.0-with-classpath-exception';
const MODULES = new Set(['java.base', 'java.sql', 'java.naming', 'java.net.http', 'java.xml', 'java.rmi', 'java.management', 'java.logging', 'java.instrument', 'java.security.jgss', 'java.security.sasl', 'jdk.httpserver']);

// ---------- javadoc → markdown ----------
function javadocToMd(jd) {
  let text = jd
    .split('\n')
    .map((l) => l.replace(/^\s*\/\*\*/, '').replace(/\*\/\s*$/, '').replace(/^\s*\*/, ''))
    .join('\n');
  text = text
    .replace(/\{@code\s+([^}]*)\}/g, '`$1`')
    .replace(/\{@literal\s+([^}]*)\}/g, '$1')
    .replace(/\{@value\s*#?([^}]*)\}/g, '`$1`')
    .replace(/\{@(?:link|linkplain|docRoot|extLink)[^}]*\}/g, (m) => {
      const inner = m.replace(/^\{@(?:link|linkplain|docRoot|extLink)[^ ]*\s*/, '').replace(/}$/, '');
      const label = inner.includes('#') ? inner.slice(inner.indexOf('#') + 1).replace(/\(.*\)$/, '') : inner;
      return '`' + (label || inner).trim() + '`';
    })
    .replace(/<li[^>]*>/gi, '\n- ')
    .replace(/<\/(ul|ol)>/gi, '\n')
    .replace(/<blockquote>\s*<pre>|<pre>/gi, '\n```\n')
    .replace(/<\/pre>/gi, '\n```\n')
    .replace(/<p\s*\/?>/gi, '\n\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<(b|strong)>([\s\S]*?)<\/\1>/gi, '**$2**')
    .replace(/<(i|em|code)>([\s\S]*?)<\/\1>/gi, '$2')
    .replace(/<\/?[a-zA-Z][^>]*>/g, '');
  const lines = text.split('\n');
  const main = [];
  const tags = [];
  let curTag = null;
  for (const l of lines) {
    const tm = l.match(/^\s*@(\w+)\s*(.*)$/);
    if (tm) {
      if (['param', 'return', 'throws', 'exception', 'since', 'deprecated', 'see'].includes(tm[1])) {
        curTag = { tag: tm[1], text: tm[2] };
        tags.push(curTag);
        continue;
      }
      curTag = null;
      continue;
    }
    if (curTag) curTag.text += ' ' + l.trim();
    else main.push(l);
  }
  let md = main.join('\n').replace(/\n{3,}/g, '\n\n').trim();
  const byTag = {};
  for (const t of tags) (byTag[t.tag] ??= []).push(t.text.trim());
  if (byTag.param?.length) md += '\n\n**参数**\n\n' + byTag.param.map((p) => {
    const pm = p.match(/^(\S+)\s+([\s\S]*)$/);
    return pm ? `- **${pm[1]}** — ${pm[2]}` : `- ${p}`;
  }).join('\n');
  if (byTag.return?.length) md += '\n\n**返回**\n\n' + byTag.return.map((r) => '- ' + r).join('\n');
  if (byTag.throws?.length || byTag.exception?.length) {
    md += '\n\n**异常**\n\n' + [...(byTag.throws || []), ...(byTag.exception || [])].map((t) => {
      const tm = t.match(/^(\S+)\s+([\s\S]*)$/);
      return tm ? `- **${tm[1]}** — ${tm[2]}` : `- ${t}`;
    }).join('\n');
  }
  if (byTag.see?.length) md += '\n\n**参见**\n\n' + byTag.see.map((s) => '- ' + s).join('\n');
  if (byTag.since?.length) md += `\n\n> *Since ${byTag.since[0]}*\n`;
  if (byTag.deprecated?.length) md += `\n\n> **⚠ Deprecated** — ${byTag.deprecated[0]}\n`;
  return md.replace(/\n{3,}/g, '\n\n').trim();
}

// ---------- 源码掩码：字符串/字符/普通注释置空，javadoc 收集 ----------
export function maskSource(text) {
  const lines = text.replace(/\r\n/g, '\n').split('\n');
  const masked = [];
  const javadocs = []; // {endLine, text}
  let mode = null; // 'block' | 'javadoc' | 'str' | 'char' | 'textblock'
  let jdText = null;
  for (let ln = 0; ln < lines.length; ln++) {
    const raw = lines[ln];
    let out = '';
    let i = 0;
    while (i < raw.length) {
      const two = raw.slice(i, i + 2);
      const three = raw.slice(i, i + 3);
      const ch = raw[i];
      if (mode === null) {
        if (three === '/**') {
          // 单行 javadoc（/** xxx */ 同行闭合）：先查同行闭合，否则进入多行模式
          const sameEnd = raw.indexOf('*/', i + 3);
          if (sameEnd >= 0) {
            javadocs.push({ endLine: ln, text: raw.slice(i, sameEnd + 2) });
            out += ' '.repeat(sameEnd + 2 - i); i = sameEnd + 2; continue;
          }
          mode = 'javadoc'; jdText = raw.slice(i); out += ' '.repeat(raw.length - i); i = raw.length; continue;
        }
        if (two === '/*') { mode = 'block'; out += '  '; i += 2; continue; }
        if (two === '//') { out += ' '.repeat(raw.length - i); i = raw.length; continue; }
        if (raw.startsWith('"""', i)) { mode = 'textblock'; out += '   '; i += 3; continue; }
        if (ch === '"') { mode = 'str'; out += ' '; i += 1; continue; }
        if (ch === "'") { mode = 'char'; out += ' '; i += 1; continue; }
        out += ch; i += 1;
      } else if (mode === 'javadoc') {
        const end = raw.indexOf('*/', i);
        if (end >= 0) {
          jdText += '\n' + raw.slice(0, end + 2);
          javadocs.push({ endLine: ln, text: jdText });
          jdText = null; mode = null;
          out += ' '.repeat(end + 2 - i); i = end + 2; continue; // 同行声明保留
        }
        jdText += '\n' + raw;
        out += ' '.repeat(raw.length); i = raw.length;
      } else if (mode === 'block') {
        const end = raw.indexOf('*/', i);
        if (end >= 0) { mode = null; out += ' '.repeat(end + 2 - i); i = end + 2; continue; }
        out += ' '.repeat(raw.length); i = raw.length;
      } else if (mode === 'textblock') {
        if (raw.startsWith('"""', i)) { mode = null; out += '   '; i += 3; continue; }
        out += ' '; i += 1;
      } else {
        if (ch === '\\') { out += '  '; i += 2; continue; }
        if ((mode === 'str' && ch === '"') || (mode === 'char' && ch === "'")) mode = null;
        out += ' '; i += 1;
      }
    }
    masked.push(out);
  }
  return { masked, javadocs };
}





const TYPE_RE = /^(?:\s*)(?:(?:public|protected|private|static|final|abstract|sealed|non-sealed|strictfp)\s+)*(?:(class|interface|enum|record)\s+)([A-Za-z_$][\w$]*)/;
const METHOD_RE = /^\s*(?:<[^<>]+>\s+)?[A-Za-z_$<>\[\],.\s?@]*?\b([A-Za-z_$][\w$]*)\s*\(/;
const ANNOT_LINE = /^\s*@[\w.]+(\s*\(.*\))?\s*$/;

// ---------- 单文件处理 ----------
export function processJavaFile(javaPath, moduleName) {
  const text = fs.readFileSync(javaPath, 'utf8').replace(/\r\n/g, '\n');
  const pkgM = text.match(/^\s*package\s+([\w.]+);/m);
  const pkg = pkgM ? pkgM[1] : '';
  const relNorm = path.relative(SRC, javaPath).replace(/\\/g, '/');
  if (/(^|\/)(internal|sun)\//.test('/' + relNorm) || pkg.includes('.internal')) return [];

  const lines = text.split(String.fromCharCode(10));
  const { masked, javadocs } = maskSource(text);
  const jdByLine = new Map(javadocs.map((j) => [j.endLine, j.text]));
  const isEmptyM = (idx) => !masked[idx].trim();

  const entries = [];
  const typeStack = []; // {simple, fq, depth}
  let depth = 0;

  const countBraces = (s) => {
    for (const ch of s) {
      if (ch === '{') depth += 1;
      else if (ch === '}') {
        depth -= 1;
        while (typeStack.length && depth < typeStack[typeStack.length - 1].depth) typeStack.pop();
      }
    }
  };

  // 从 start 行起收集声明，直到遇到 { 或 ;（基于掩码行判断，返回原文）
  const collectDecl = (start) => {
    const parts = [];
    let k = start;
    while (k < masked.length) {
      const mline = masked[k];
      const brace = mline.indexOf('{');
      const semi = mline.indexOf(';');
      const cut = [brace, semi].filter((x) => x >= 0).sort((a, b) => a - b)[0];
      if (cut >= 0) {
        parts.push(lines[k].slice(0, cut).trim());
        return { decl: parts.join(' ').replace(/\s+/g, ' ').trim(), endsWithBrace: brace >= 0 && (semi < 0 || brace < semi), next: k + 1 };
      }
      parts.push(lines[k].trim());
      k += 1;
    }
    return { decl: parts.join(' ').trim(), endsWithBrace: false, next: k };
  };

  let i = 0;
  while (i < masked.length) {
    const jd = jdByLine.get(i);
    if (jd) {
      // 声明可能在 javadoc 结束的同一行（/** doc */ public void x()）或之后的空行/注解行后
      let j = i;
      while (j < masked.length && (isEmptyM(j) || ANNOT_LINE.test(lines[j]))) j += 1;
      if (j < masked.length) {
        const info = collectDecl(j);
        const decl = info.decl;
        const isPublic = /\bpublic\b/.test(decl);
        const isProtected = /\bprotected\b/.test(decl);
        const tm = decl.match(TYPE_RE);
        const owner = typeStack.length ? typeStack[typeStack.length - 1] : null;

        if (tm && info.endsWithBrace) {
          // 类型声明：非 public 的也要入栈（保证嵌套命名正确），仅 public/protected 产出条目
          const kindKw = tm[1];
          const simple = tm[2];
          const fq = (owner ? owner.fq + '.' : pkg ? pkg + '.' : '') + simple;
          if ((isPublic || isProtected) && typeStack.length <= 1) {
            entries.push({ kind: 'type', simple, name: fq, decl, jd, memberOf: owner ? owner.fq : null, pkg });
          }
          for (let k = j; k < info.next; k++) countBraces(masked[k]);
          typeStack.push({ simple, fq, depth, isInterface: kindKw === 'interface' });
          i = info.next;
          continue;
        }
        const mm = decl.match(METHOD_RE);
        const fieldLike = !/\(/.test(decl);
        if (depth >= 1 && owner && (isPublic || isProtected || owner.isInterface) && (mm || fieldLike)) {
          const simple = mm ? mm[1] : (decl.match(/([A-Za-z_$][\w$]*)\s*(?:=|;)/) || [])[1];
          if (simple) {
            entries.push({ kind: mm ? 'method' : 'field', simple, name: `${owner.simple}.${simple}`, decl, jd, memberOf: owner.fq, pkg });
            }
          for (let k = j; k < info.next; k++) countBraces(masked[k]);
          i = info.next;
          continue;
        }
        // 有 javadoc 但不构成可收录声明：落到常规深度统计
      }
    }
    countBraces(masked[i]);
    i += 1;
  }

  return entries.map((e) => {
    const ownerSimple = e.memberOf ? e.memberOf.split('.').pop() : '';
    return {
      kind: e.kind,
      name: e.name,
      title: e.kind === 'type' ? e.name.split('.').pop() : `${ownerSimple}.${e.simple}`,
      decl: e.decl,
      desc: javadocToMd(e.jd),
      pkg: e.pkg,
      moduleName,
    };
  });
}

// ---------- JavaParser.g4 → grammar 条目 ----------
function grammarEntries() {
  if (!fs.existsSync(G4)) return [];
  const text = fs.readFileSync(G4, 'utf8');
  const rules = [];
  const re = /^([a-zA-Z_][\w]*)\s*:\s*([\s\S]*?);/gm;
  let m;
  while ((m = re.exec(text))) rules.push({ name: m[1], body: m[2].replace(/\r?\n\s*/g, '\n').trim() });
  return rules;
}

// ---------- 主流程 ----------
fs.rmSync(OUT, { recursive: true, force: true });
const stats = { files: 0, entries: 0, byKind: {} };
const written = new Set();

function write(entry) {
  const slug = entry.name.toLowerCase().replace(/[^a-z0-9_.]+/g, '-').replace(/-{2,}/g, '-');
  const id = `java-en-${entry.category}-${slug.replace(/\./g, '-')}`;
  if (written.has(id)) return;
  written.add(id);
  const fm = {
    id,
    language: 'java',
    lang: 'en',
    category: entry.category,
    name: entry.name,
    ...(entry.signature ? { signature: entry.signature } : {}),
    ...(entry.title ? { title: entry.title } : {}),
    ...(entry.directive ? { directive: entry.directive } : {}),
    module: entry.module,
    source_url: entry.source_url || null,
    license: LICENSE,
    updated: UPDATED,
  };
  const yaml = Object.entries(fm).filter(([, v]) => v !== null).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join('\n');
  const body = `---\n${yaml}\n---\n\n# ${fm.title || fm.name}\n\n${entry.content.trim()}\n`;
  const outPath = path.join(OUT, 'en', entry.rel.replace(/\//g, path.sep));
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, body, 'utf8');
  stats.entries += 1;
  stats.byKind[entry.category] = (stats.byKind[entry.category] || 0) + 1;
}

const modules = fs.existsSync(SRC) ? fs.readdirSync(SRC, { withFileTypes: true }).filter((e) => e.isDirectory() && MODULES.has(e.name)).map((e) => e.name) : [];
for (const mod of modules) {
  const classesDir = path.join(SRC, mod, 'share', 'classes');
  if (!fs.existsSync(classesDir)) continue;
  const files = (function walk(d) {
    const out = [];
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) out.push(...walk(p));
      else if (e.name.endsWith('.java') && e.name !== 'module-info.java' && e.name !== 'package-info.java') out.push(p);
    }
    return out;
  })(classesDir);
  for (const f of files) {
    const relInMod = path.relative(classesDir, f).replace(/\\/g, '/');
    for (const e of processJavaFile(f, mod)) {
      const page = relInMod.replace(/\.java$/, '').replace(/\$/g, '.');
      const href = `https://docs.oracle.com/en/java/javase/21/docs/api/${mod}/${relInMod.replace(/\.java$/, '.html').replace(/\$/g, '-')}`;
      write({
        category: 'function',
        name: e.name,
        title: e.title,
        signature: e.kind === 'type' ? null : e.decl,
        directive: e.kind,
        module: `${mod}/${e.pkg}`,
        source_url: href,
        rel: `${e.pkg.replace(/\./g, '/')}/${e.name.replace(/\$/g, '-')}.md`,
        content: (e.kind !== 'type' ? '```java\n' + e.decl + '\n```\n\n' : '') + e.desc,
      });
    }
    stats.files += 1;
  }
}

for (const r of grammarEntries()) {
  write({
    category: 'grammar',
    name: r.name,
    title: `JLS 语法规则：${r.name}`,
    directive: 'rule',
    module: 'jls',
    rel: `grammar/${r.name}.md`,
    content: '```antlr\n' + r.name + ' : ' + r.body + ' ;\n```\n\n来源：[antlr/grammars-v4 JavaParser.g4](https://github.com/antlr/grammars-v4/tree/master/java/java)（依据 JLS 移植）。',
  });
}

console.log('Java 语料生成完成:', stats, '模块:', modules.join(','));
