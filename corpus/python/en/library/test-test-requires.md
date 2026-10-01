---
id: "python-en-function-test-requires"
language: "python"
lang: "en"
category: "function"
name: "requires"
signature: "requires(resource, msg=None)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.requires"
license: "PSF"
updated: "2026-10-01"
---

# requires

Raise `ResourceDenied` if *resource* is not available. *msg* is the
argument to `ResourceDenied` if it is raised. Always returns
`True` if called by a function whose `__name__` is `'__main__'`.
Used when tests are executed by `test.regrtest`.
