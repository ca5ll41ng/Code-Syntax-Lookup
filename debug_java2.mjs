// debug_java2.mjs — 在 processJavaFile 逻辑内复刻主循环并打印分支命中情况
import fs from 'node:fs';
import { maskSource } from './sources/java_adapter.mjs';

const javaPath = 'raw/openjdk/src/java.base/share/classes/java/lang/String.java';
const text = fs.readFileSync(javaPath, 'utf8').replace(/\r\n/g, '\n');
const pkgM = text.match(/^\s*package\s+([\w.]+);/m);
const pkg = pkgM ? pkgM[1] : '';
const lines = text.split(String.fromCharCode(10));
const { masked, javadocs } = maskSource(text);
const jdByLine = new Map(javadocs.map((j) => [j.endLine, j.text]));
const isEmptyM = (idx) => !masked[idx].trim();

const TYPE_RE = /^(?:\s*)(?:(?:public|protected|private|static|final|abstract|sealed|non-sealed|strictfp)\s+)*(?:(?:class|interface|enum|record)\s+)([A-Za-z_$][\w$]*)/;
const METHOD_RE = /^\s*(?:<[^<>]+>\s+)?[A-Za-z_$<>\[\],.\s?@]*?[A-Za-z_$][\w$]*\s*\(/;
const ANNOT_LINE = /^\s*@[\w.]+(\s*\(.*\))?\s*$/;

const typeStack = [];
let depth = 0;
let fired = 0, pushed = 0, skippedNoBrace = 0, skippedNoMatch = 0;

const countBraces = (s) => {
  for (const ch of s) {
    if (ch === '{') depth += 1;
    else if (ch === '}') {
      depth -= 1;
      while (typeStack.length && depth < typeStack[typeStack.length - 1].depth) typeStack.pop();
    }
  }
};

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
    fired += 1;
    let j = i;
    while (j < masked.length && (isEmptyM(j) || ANNOT_LINE.test(lines[j]))) j += 1;
    if (j < masked.length) {
      const info = collectDecl(j);
      const decl = info.decl;
      const tm = decl.match(TYPE_RE);
      const mm = decl.match(METHOD_RE);
      if (fired <= 3) console.log(`[fired ${fired}] j=${j} decl=${decl.slice(0, 80)}\n   TYPE=${!!tm} endsBrace=${info.endsWithBrace} METHOD=${!!mm} depth=${depth} public=${/\bpublic\b/.test(decl)}`);
      const isPublic = /\bpublic\b/.test(decl);
      const isProtected = /\bprotected\b/.test(decl);
      const owner = typeStack.length ? typeStack[typeStack.length - 1] : null;
      if (tm && info.endsWithBrace) {
        if ((isPublic || isProtected) && typeStack.length <= 1) { pushed += 1; console.log('  → push type:', tm[1]); }
        for (let k = j; k < info.next; k++) countBraces(masked[k]);
        typeStack.push({ simple: tm[1], fq: (owner ? owner.fq + '.' : pkg + '.') + tm[1], depth });
        i = info.next;
        continue;
      }
      const fieldLike = !/\(/.test(decl);
      if (depth >= 1 && owner && (isPublic || isProtected) && (mm || (fieldLike && /[=;]/.test(decl)))) {
        pushed += 1;
        for (let k = j; k < info.next; k++) countBraces(masked[k]);
        i = info.next;
        continue;
      }
      skippedNoMatch += 1;
    } else skippedNoBrace += 1;
  }
  countBraces(masked[i]);
  i += 1;
}
console.log({ javadocs: javadocs.length, fired, pushed, skippedNoMatch, skippedNoBrace, endDepth: depth, types: typeStack.length });
