---
id: "python-en-function-curses-complexstr"
language: "python"
lang: "en"
category: "function"
name: "complexstr"
signature: "complexstr(cells[, attr[, pair]])"
directive: "class"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.complexstr"
license: "PSF"
updated: "2026-10-01"
---

# complexstr

A *complex character string* (or *complexstr*) is an immutable sequence of
styled character cells -- the string counterpart of
`complexchar` (as `str` is to a single character).

If *cells* is a string, it is split into character cells (each a spacing
character optionally followed by combining characters), and *attr* (a
combination of the `WA_* attributes`) and *pair*
(a color pair number), if given, are applied to every cell.

Otherwise *cells* is an iterable whose items are themselves cells, each a
`complexchar` or a string; each item then carries its own rendition,
and *attr* and *pair* must be omitted.

It is returned by `window.in_wchstr`, and accepted by
`window.addstr`, `~window.addnstr`, `~window.insstr` and
`~window.insnstr`, so a run read from a window can be written back
unchanged.

It behaves like an immutable sequence: `len(s)` is the number of cells,
`s[i]` is the *i*-th cell as a `complexchar`, slicing and
concatenation produce new `complexstr` instances, and iterating
yields the cells.  `str` returns the cells' text joined together, and
two complex character strings are equal when their cells all match.  It is
hashable.

To build or edit a run of cells, use an ordinary `list` of
`complexchar` (or strings); a `complexstr` is the immutable
form returned by a read.

Like `complexchar`, this type works on both wide- and narrow-character
builds, with the same per-cell limitations on a narrow build.

> *Added in next*
