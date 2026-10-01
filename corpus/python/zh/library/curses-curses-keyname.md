---
id: "python-zh-function-curses-keyname"
language: "python"
lang: "zh"
category: "function"
name: "keyname"
signature: "keyname(k)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/zh-cn/3/library/curses.html#curses.keyname"
license: "PSF"
updated: "2026-10-01"
---

# keyname

Return the name of the key numbered *k* as a bytes object.  The name of a key generating printable
ASCII character is the key's character.  The name of a control-key combination
is a two-byte bytes object consisting of a caret (`b'^'`) followed by the corresponding
printable ASCII character.  The name of an alt-key combination (128--255) is a
bytes object consisting of the prefix `b'M-'` followed by the name of the corresponding
ASCII character.

如果 *k* 为负值则会引发 :exc:`ValueError`。
