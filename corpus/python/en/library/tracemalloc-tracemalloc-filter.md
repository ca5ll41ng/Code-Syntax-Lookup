---
id: "python-en-function-tracemalloc-filter"
language: "python"
lang: "en"
category: "function"
name: "Filter"
signature: "Filter(inclusive: bool, filename_pattern: str, lineno: int=None, all_frames: bool=False, domain: int=None)"
directive: "class"
module: "tracemalloc"
source_url: "https://docs.python.org/3/library/tracemalloc.html#tracemalloc.Filter"
license: "PSF"
updated: "2026-10-01"
---

# Filter

Filter on traces of memory blocks.

See the `fnmatch.fnmatch` function for the syntax of
*filename_pattern*. The `'.pyc'` file extension is
replaced with `'.py'`.

Examples:

* `Filter(True, subprocess.__file__)` only includes traces of the
  `subprocess` module
* `Filter(False, tracemalloc.__file__)` excludes traces of the
  `tracemalloc` module
* `Filter(False, "<unknown>")` excludes empty tracebacks

> *Changed in 3.5*: The ``'.pyo'`` file extension is no longer replaced with ``'.py'``.

> *Changed in 3.6*: Added the :attr:`domain` attribute.

attribute:: domain

attribute:: inclusive

attribute:: lineno

attribute:: filename_pattern

attribute:: all_frames
