---
id: "python-zh-function-re-multiline"
language: "python"
lang: "zh"
category: "function"
name: "MULTILINE"
directive: "data"
module: "re"
source_url: "https://docs.python.org/zh-cn/3/library/re.html#re.MULTILINE"
license: "PSF"
updated: "2026-10-01"
---

# MULTILINE

When specified, the pattern character `'^'` matches at the beginning of the
string and at the beginning of each line (immediately following each newline);
and the pattern character `'$'` matches at the end of the string and at the
end of each line (immediately preceding each newline).  By default, `'^'`
matches only at the beginning of the string, and `'$'` only at the end of the
string and immediately before the newline (if any) at the end of the string.

对应于内联旗标 ``(?m)``。
