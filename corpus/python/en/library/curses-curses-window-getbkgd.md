---
id: "python-en-function-curses-window-getbkgd"
language: "python"
lang: "en"
category: "function"
name: "window.getbkgd"
signature: "window.getbkgd()"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.getbkgd"
license: "PSF"
updated: "2026-10-01"
---

# window.getbkgd

Return the given window's current background character/attribute pair.
Its components can be extracted like those of `inch`.
It cannot represent a background set with a wide character or with a color
pair outside the `color_pair` range; use `getbkgrnd` for those.
