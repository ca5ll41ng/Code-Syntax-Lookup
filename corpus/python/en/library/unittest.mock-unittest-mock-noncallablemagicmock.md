---
id: "python-en-function-unittest-mock-noncallablemagicmock"
language: "python"
lang: "en"
category: "function"
name: "NonCallableMagicMock"
signature: "NonCallableMagicMock(*args, **kw)"
directive: "class"
module: "unittest.mock"
source_url: "https://docs.python.org/3/library/unittest.mock.html#unittest.mock.NonCallableMagicMock"
license: "PSF"
updated: "2026-10-01"
---

# NonCallableMagicMock

A non-callable version of `MagicMock`.

The constructor parameters have the same meaning as for
`MagicMock`, with the exception of *return_value* and
*side_effect* which have no meaning on a non-callable mock.
