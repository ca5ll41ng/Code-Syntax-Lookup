// debug_java4.mjs — dump 全部 javadoc 关联结果
import fs from 'node:fs';
import { maskSource } from './sources/java_adapter.mjs';

const javaPath = 'raw/openjdk/src/java.base/share/classes/java/lang/String.java';
const text = fs.readFileSync(javaPath, 'utf8').replace(/\r\n/g, '\n');
const lines = text.split('\n');
const pkgM = text.match(/^\s*package\s+([\w.]+);/m);
const pkg = pkgM ? pkgM[1] : '';
const { masked, javadocs } = maskSource(text);
const jdByLine = new Map(javadocs.map((j) => [j.endLine, j.text]));
const isEmptyM = (idx) => !masked[idx].trim();

const TYPE_RE = /^(?:\s*)(?:(?:public|protected|private|static|final|abstract|sealed|non-sealed|strictfp)\s+)*(?:(?:class|interface|enum|record)\s+)([A-Za-z_$][\w$]*)/;
const METHOD_RE = /^\s*(?:<[^<>]+>\s+)?[A-Za-z_$<>\[\],.\s?@]*?[A-Za-z_$][\w$]*\s*\(/;
const ANNOT_LINE = /^\s*@[\w.]+(\s*\(.*\))?\s*$/;

const typeStack = [];
let depth = 0;
const log = [];

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
    let j = i;
    while (j < masked.length && (isEmptyM(j) || ANNOT_LINE.test(lines[j]))) j += 1;
    const info = collectDecl(j);
    const decl = info.decl;
    const tm = decl.match(TYPE_RE);
    const mm = decl.match(METHOD_RE);
    const isPublic = /\bpublic\b/.test(decl);
    log.push(`i=${i} j=${j} depth=${depth} tm=${!!tm} mm=${!!mm} pub=${isPublic} br=${info.endsWithBrace} | ${decl.slice(0, 70)}`);
    if (tm && info.endsWithBrace) {
      for (let k = j; k < info.next; k++) countBraces(masked[k]);
      typeStack.push({ simple: tm[1], fq: pkg + '.' + tm[1], depth });
      i = info.next;
      continue;
    }
    if (depth >= 1 && typeStack.length && (isPublic || /\bprotected\b/.test(decl)) && (mm || (!/\(/.test(decl) && /[=;]/.test(decl)))) {
      for (let k = j; k < info.next; k++) countBraces(masked[k]);
      i = info.next;
      continue;
    }
  }
  countBraces(masked[i]);
  i += 1;
}
fs.writeFileSync('debug_dump.txt', log.join('\n'));
console.log('dump 完成:', log.length, '条');
