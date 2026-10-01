---
id: "python-en-function-curses-getwin"
language: "python"
lang: "en"
category: "function"
name: "getwin"
signature: "getwin(file)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.getwin"
license: "PSF"
updated: "2026-10-01"
---

# getwin

Read window-related data stored in the file by an earlier `window.putwin` call.
The routine then creates and initializes a new window using that data, returning
the new window object.  The *file* argument must be a file object opened for
reading in binary mode.
