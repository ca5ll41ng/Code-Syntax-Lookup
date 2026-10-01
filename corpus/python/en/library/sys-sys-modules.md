---
id: "python-en-function-sys-modules"
language: "python"
lang: "en"
category: "function"
name: "modules"
directive: "data"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.modules"
license: "PSF"
updated: "2026-10-01"
---

# modules

This is a dictionary that maps module names to modules which have already been
loaded.  This can be manipulated to force reloading of modules and other tricks.
However, replacing the dictionary will not necessarily work as expected and
deleting essential items from the dictionary may cause Python to fail.  If
you want to iterate over this global dictionary always use
`sys.modules.copy()` or `tuple(sys.modules)` to avoid exceptions as its
size may change during iteration as a side effect of code or activity in
other threads.
