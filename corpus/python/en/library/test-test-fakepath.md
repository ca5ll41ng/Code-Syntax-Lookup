---
id: "python-en-function-test-fakepath"
language: "python"
lang: "en"
category: "function"
name: "FakePath"
signature: "FakePath(path)"
directive: "class"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.FakePath"
license: "PSF"
updated: "2026-10-01"
---

# FakePath

Simple `path-like object`.  It implements the
`~os.PathLike.__fspath__`
method which just returns the *path* argument.  If *path* is an exception,
it will be raised in `__fspath__`.
