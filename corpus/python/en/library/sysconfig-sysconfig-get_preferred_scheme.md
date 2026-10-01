---
id: "python-en-function-sysconfig-get_preferred_scheme"
language: "python"
lang: "en"
category: "function"
name: "get_preferred_scheme"
signature: "get_preferred_scheme(key)"
directive: "function"
module: "sysconfig"
source_url: "https://docs.python.org/3/library/sysconfig.html#sysconfig.get_preferred_scheme"
license: "PSF"
updated: "2026-10-01"
---

# get_preferred_scheme

Return a preferred scheme name for an installation layout specified by *key*.

*key* must be either `"prefix"`, `"home"`, or `"user"`.

The return value is a scheme name listed in `get_scheme_names`. It
can be passed to `sysconfig` functions that take a *scheme* argument,
such as `get_paths`.

> *Added in 3.10*

> *Changed in 3.11*: When Python runs from a virtual environment and ``key="prefix"``, the *venv* scheme is returned.
