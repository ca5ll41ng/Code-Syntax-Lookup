---
id: "python-en-function-optparse-values"
language: "python"
lang: "en"
category: "function"
name: "Values"
directive: "class"
module: "optparse"
source_url: "https://docs.python.org/3/library/optparse.html#optparse.Values"
license: "PSF"
updated: "2026-10-01"
---

# Values

An object holding parsed argument names and values as attributes.
Normally created by calling when calling `OptionParser.parse_args`,
and can be overridden by a custom subclass passed to the *values* argument of
`OptionParser.parse_args` (as described in `optparse-parsing-arguments`).

`Values` objects support `copy.replace`,
which returns a copy of the object with the specified attributes replaced.

> *Changed in next*: Added support for :func:`copy.replace`.
