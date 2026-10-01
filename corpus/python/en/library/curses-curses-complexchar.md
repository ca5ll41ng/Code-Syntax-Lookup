---
id: "python-en-function-curses-complexchar"
language: "python"
lang: "en"
category: "function"
name: "complexchar"
signature: "complexchar(text, /, attr=0, pair=0)"
directive: "class"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.complexchar"
license: "PSF"
updated: "2026-10-01"
---

# complexchar

A *complex character* (or *complexchar*) is an immutable styled
character cell: a spacing character optionally followed by combining
characters, together with a set of attributes and a color pair.

*text* is the cell's text, *attr* a combination of the
`WA_* attributes` (equivalent to the matching
`A_*` constants), and *pair* a color pair number.  Unlike the packed
`chtype` used by `~window.inch` and the `A_*` methods,
the color pair is stored separately and is not limited to the value that
fits in a `color_pair`.

Complex characters are returned by `window.in_wch` and
`window.getbkgrnd`, and are accepted (along with an integer, a byte
or a string) by the character-cell methods such as `window.addch`,
`window.insch`, `window.bkgd`, `window.border`,
`window.hline` and `window.vline`.  A complex character already
carries its own rendition, so it cannot be combined with an explicit *attr*
argument.

`str` returns the cell's text; two complex characters are equal when
their text, attributes and color pair all match.

The same code works on both wide- and narrow-character builds.  On a narrow
build a cell holds a single character (no combining marks) that must encode to
one byte in the window's encoding (8-bit locales only), and *pair* is limited
to the value that fits in a `color_pair`.

attribute:: attr

attribute:: pair

> *Added in next*
