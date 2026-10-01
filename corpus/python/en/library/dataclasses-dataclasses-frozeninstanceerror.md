---
id: "python-en-function-dataclasses-frozeninstanceerror"
language: "python"
lang: "en"
category: "function"
name: "FrozenInstanceError"
directive: "exception"
module: "dataclasses"
source_url: "https://docs.python.org/3/library/dataclasses.html#dataclasses.FrozenInstanceError"
license: "PSF"
updated: "2026-10-01"
---

# FrozenInstanceError

Raised when an implicitly defined `~object.__setattr__` or
`~object.__delattr__` is called on a dataclass which was defined with
`frozen=True`. It is a subclass of `AttributeError`.
