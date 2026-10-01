---
id: "python-en-function-curses-screen"
language: "python"
lang: "en"
category: "function"
name: "screen"
directive: "class"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.screen"
license: "PSF"
updated: "2026-10-01"
---

# screen

A *screen* object represents a terminal initialized by `newterm`
(or `new_prescr`),
in addition to the default screen created by `initscr`.
Screen objects are returned by those functions;
they cannot be instantiated directly.

A screen is freed automatically once it is no longer referenced,
either directly or through one of its windows.
Each window keeps its screen alive,
so a screen remains valid as long as any of its windows does.

> *Added in next*
