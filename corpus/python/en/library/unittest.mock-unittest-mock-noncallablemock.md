---
id: "python-en-function-unittest-mock-noncallablemock"
language: "python"
lang: "en"
category: "function"
name: "NonCallableMock"
signature: "NonCallableMock(spec=None, wraps=None, name=None, spec_set=None, **kwargs)"
directive: "class"
module: "unittest.mock"
source_url: "https://docs.python.org/3/library/unittest.mock.html#unittest.mock.NonCallableMock"
license: "PSF"
updated: "2026-10-01"
---

# NonCallableMock

A non-callable version of `Mock`. The constructor parameters have the same
meaning of `Mock`, with the exception of *return_value* and *side_effect*
which have no meaning on a non-callable mock.
