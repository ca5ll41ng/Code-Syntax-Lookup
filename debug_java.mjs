// debug_java.mjs — 临时调试：打印 String.java 的掩码与关联过程
import fs from 'node:fs';
import { maskSource } from './sources/java_adapter.mjs';

const text = fs.readFileSync('raw/openjdk/src/java.base/share/classes/java/lang/String.java', 'utf8').replace(/\r\n/g, '\n');
const lines = text.split('\n');
const { masked, javadocs } = maskSource(text);
console.log('javadoc 数:', javadocs.length, '| 总行数:', lines.length);

const jd = javadocs[0];
console.log('第一个 javadoc endLine:', jd.endLine, '| 文本前 100:', JSON.stringify(jd.text.slice(0, 100)));
console.log('endLine masked:', JSON.stringify(masked[jd.endLine]));

// 模拟主循环的前 3 次 javadoc 关联
const TYPE_RE = /^(?:\s*)(?:(?:public|protected|private|static|final|abstract|sealed|non-sealed|strictfp)\s+)*(?:(?:class|interface|enum|record)\s+)([A-Za-z_$][\w$]*)/;
const METHOD_RE = /^\s*(?:<[^<>]+>\s+)?[A-Za-z_$<>\[\],.\s?@]*?[A-Za-z_$][\w$]*\s*\(/;
const ANNOT_LINE = /^\s*@[\w.]+(\s*\(.*\))?\s*$/;
const isEmptyM = (idx) => !masked[idx].trim();

let shown = 0;
for (const { endLine } of javadocs) {
  if (shown >= 3) break;
  let j = endLine;
  while (j < masked.length && (isEmptyM(j) || ANNOT_LINE.test(lines[j]))) j += 1;
  console.log(`--- javadoc@${endLine} → 声明行 ${j}:`, JSON.stringify(lines[j]?.slice(0, 90)));
  console.log('    masked:', JSON.stringify(masked[j]?.slice(0, 90)), '| TYPE:', TYPE_RE.test(lines[j] ?? ''), '| METHOD:', METHOD_RE.test(lines[j] ?? ''));
  shown += 1;
}
