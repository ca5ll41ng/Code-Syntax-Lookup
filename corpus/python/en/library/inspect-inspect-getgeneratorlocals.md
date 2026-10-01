---
id: "python-en-function-inspect-getgeneratorlocals"
language: "python"
lang: "en"
category: "function"
name: "getgeneratorlocals"
signature: "getgeneratorlocals(generator)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.getgeneratorlocals"
license: "PSF"
updated: "2026-10-01"
---

# getgeneratorlocals

Get the mapping of live local variables in *generator* to their current
values.  A dictionary is returned that maps from variable names to values.
This is the equivalent of calling `locals` in the body of the
generator, and all the same caveats apply.

If *generator* is a `generator` with no currently associated frame,
then an empty dictionary is returned.  `TypeError` is raised if
*generator* is not a Python generator object.

impl-detail::

> *Added in 3.3*
