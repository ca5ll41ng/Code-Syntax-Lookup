---
id: "python-en-function-tempfile-tempdir"
language: "python"
lang: "en"
category: "function"
name: "tempdir"
directive: "data"
module: "tempfile"
source_url: "https://docs.python.org/3/library/tempfile.html#tempfile.tempdir"
license: "PSF"
updated: "2026-10-01"
---

# tempdir

When set to a value other than `None`, this variable defines the
default value for the *dir* argument to the functions defined in this
module, including its type, bytes or str.  It cannot be a
`path-like object`.

If `tempdir` is `None` (the default) at any call to any of the above
functions except `gettempprefix` it is initialized following the
algorithm described in `gettempdir`.

> **Note**
>
> Beware that if you set `tempdir` to a bytes value, there is a
> nasty side effect: The global default return type of
> `mkstemp` and `mkdtemp` changes to bytes when no
> explicit `prefix`, `suffix`, or `dir` arguments of type
> str are supplied. Please do not write code expecting or
> depending on this. This awkward behavior is maintained for
> compatibility with the historical implementation.
>
