---
id: "python-en-function-curses-window-bkgd"
language: "python"
lang: "en"
category: "function"
name: "window.bkgd"
signature: "window.bkgd(ch[, attr])"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.bkgd"
license: "PSF"
updated: "2026-10-01"
---

# window.bkgd

Set the background property of the window to the character *ch*, with
attributes *attr*.  The change is then applied to every character position in
that window:

* The attribute of every character in the window  is changed to the new
  background attribute.

* Wherever  the  former background character appears, it is changed to the new
  background character.

> *Changed in next*: Wide and combining characters, and :class:`complexchar` cells, are now accepted.
