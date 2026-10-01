---
id: "python-en-function-linecache-getline"
language: "python"
lang: "en"
category: "function"
name: "getline"
signature: "getline(filename, lineno, module_globals=None)"
directive: "function"
module: "linecache"
source_url: "https://docs.python.org/3/library/linecache.html#linecache.getline"
license: "PSF"
updated: "2026-10-01"
---

# getline

Get line *lineno* from file named *filename*. This function will never raise an
exception --- it will return `''` on errors (the terminating newline character
will be included for lines that are found).

If *filename* indicates a frozen module (starting with `'<frozen '`), the function
will attempt to get the real file name from `module_globals['__file__']` if
*module_globals* is not `None`.

If a file named *filename* is not found, the function first checks
for a PEP 302 `__loader__` in *module_globals*.
If there is such a loader and it defines a `get_source` method,
then that determines the source lines
(if `get_source()` returns `None`, then `''` is returned).
Finally, if *filename* is a relative filename,
it is looked up relative to the entries in the module search path, `sys.path`.

> *Changed in 3.14*: Support *filename* of frozen modules.
