---
id: "python-en-function-curses-wunctrl"
language: "python"
lang: "en"
category: "function"
name: "wunctrl"
signature: "wunctrl(ch)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.wunctrl"
license: "PSF"
updated: "2026-10-01"
---

# wunctrl

Return a string which is a printable representation of the character *ch*;
any attributes and color pair are ignored.
ASCII control characters are represented as a caret followed by a character,
for example as `'^C'`.  Printing characters, including non-ASCII characters
printable in the locale, are left as they are.  The representation of other
characters is defined by the underlying curses library.

> *Added in next*
