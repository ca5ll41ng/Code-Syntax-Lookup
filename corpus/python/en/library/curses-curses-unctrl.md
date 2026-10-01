---
id: "python-en-function-curses-unctrl"
language: "python"
lang: "en"
category: "function"
name: "unctrl"
signature: "unctrl(ch)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.unctrl"
license: "PSF"
updated: "2026-10-01"
---

# unctrl

Return a bytes object which is a printable representation of the character *ch*;
any attributes and color pair are ignored.
Control characters are represented as a caret followed by a character,
for example as `b'^C'`.
Printing characters are left as they are.
The representation of other characters is defined by the underlying curses
library.

*ch* must fit in a single byte; use `wunctrl` for other characters.
