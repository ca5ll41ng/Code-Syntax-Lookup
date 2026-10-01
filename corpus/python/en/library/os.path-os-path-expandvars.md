---
id: "python-en-function-os-path-expandvars"
language: "python"
lang: "en"
category: "function"
name: "expandvars"
signature: "expandvars(path)"
directive: "function"
module: "os.path"
source_url: "https://docs.python.org/3/library/os.path.html#os.path.expandvars"
license: "PSF"
updated: "2026-10-01"
---

# expandvars

Return the argument with environment variables expanded.  Substrings of the form
`$name` or `${name}` are replaced by the value of environment variable
*name*.  Malformed variable names and references to non-existing variables are
left unchanged.

On Windows, `%name%` expansions are supported in addition to `$name` and
`${name}`.

> *Changed in 3.6*: Accepts a :term:`path-like object`.
