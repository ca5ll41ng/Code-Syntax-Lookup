---
id: "python-en-function-typing-pattern"
language: "python"
lang: "en"
category: "function"
name: "Pattern"
directive: "class"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.Pattern"
license: "PSF"
updated: "2026-10-01"
---

# Pattern

Deprecated aliases corresponding to the return types from
`re.compile` and `re.search`.

These types (and the corresponding functions) are generic over
`AnyStr`. `Pattern` can be specialised as `Pattern[str]` or
`Pattern[bytes]`; `Match` can be specialised as `Match[str]` or
`Match[bytes]`.

> *Deprecated since 3.9*: Classes ``Pattern`` and ``Match`` from :mod:`re` now support ``[]``. See :pep:`585` and :ref:`types-genericalias`.
