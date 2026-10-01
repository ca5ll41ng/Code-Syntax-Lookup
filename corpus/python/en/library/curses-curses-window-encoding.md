---
id: "python-en-function-curses-window-encoding"
language: "python"
lang: "en"
category: "function"
name: "window.encoding"
directive: "attribute"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.encoding"
license: "PSF"
updated: "2026-10-01"
---

# window.encoding

Encoding used to encode the string arguments of the methods and to decode
their results on a build without wide-character support.
The encoding attribute is inherited from the parent window when a subwindow
is created, for example with `window.subwin`.
By default, current locale encoding is used (see `locale.getencoding`).

> *Added in 3.3*
