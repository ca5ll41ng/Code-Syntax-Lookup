---
id: "python-en-function-curses-resize_term"
language: "python"
lang: "en"
category: "function"
name: "resize_term"
signature: "resize_term(nlines, ncols)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.resize_term"
license: "PSF"
updated: "2026-10-01"
---

# resize_term

Backend function used by `resizeterm`, performing most of the work;
when resizing the windows, `resize_term` blank-fills the areas that are
extended.  The calling application should fill in these areas with
appropriate data.  The `resize_term` function attempts to resize all
windows.  However, due to the calling convention of pads, it is not possible
to resize these without additional interaction with the application.
