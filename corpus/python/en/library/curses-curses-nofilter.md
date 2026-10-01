---
id: "python-en-function-curses-nofilter"
language: "python"
lang: "en"
category: "function"
name: "nofilter"
signature: "nofilter()"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.nofilter"
license: "PSF"
updated: "2026-10-01"
---

# nofilter

Undo the effect of a previous `.filter` call.
Like `.filter`, it must be called before `initscr` (or
`newterm`) so that the next initialization uses the full screen
again.

Availability: if the underlying curses library provides `nofilter()`.

> *Added in next*
