---
id: "python-en-function-dataclasses-fields"
language: "python"
lang: "en"
category: "function"
name: "fields"
signature: "fields(class_or_instance)"
directive: "function"
module: "dataclasses"
source_url: "https://docs.python.org/3/library/dataclasses.html#dataclasses.fields"
license: "PSF"
updated: "2026-10-01"
---

# fields

Returns a tuple of `Field` objects that define the fields for this
dataclass.  Accepts either a dataclass, or an instance of a dataclass.
Raises `TypeError` if not passed a dataclass or instance of one.
Does not return pseudo-fields which are `ClassVar` or `InitVar`.
