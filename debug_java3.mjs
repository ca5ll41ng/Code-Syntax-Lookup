// debug_java3.mjs — 找出从未触发关联的 javadoc
import fs from 'node:fs';
import { maskSource } from './sources/java_adapter.mjs';

const javaPath = 'raw/openjdk/src/java.base/share/classes/java/lang/String.java';
const text = fs.readFileSync(javaPath, 'utf8').replace(/\r\n/g, '\n');
const lines = text.split('\n');
const { masked, javadocs } = maskSource(text);
console.log('javadoc 总数:', javadocs.length);
console.log('endLine 列表(前12):', javadocs.slice(0, 12).map((j) => j.endLine).join(','));

// 检查前 12 个 javadoc 的下一非空行
const ANNOT_LINE = /^\s*@[\w.]+(\s*\(.*\))?\s*$/;
const isEmptyM = (idx) => !masked[idx].trim();
for (const { endLine } of javadocs.slice(0, 8)) {
  let j = endLine;
  while (j < masked.length && (isEmptyM(j) || ANNOT_LINE.test(lines[j]))) j += 1;
  console.log(`@${endLine} → ${j}:`, JSON.stringify((lines[j] || '').slice(0, 70)));
}
