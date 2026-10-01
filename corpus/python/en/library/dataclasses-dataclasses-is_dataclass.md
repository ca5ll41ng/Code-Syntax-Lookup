---
id: "python-en-function-dataclasses-is_dataclass"
language: "python"
lang: "en"
category: "function"
name: "is_dataclass"
signature: "is_dataclass(obj)"
directive: "function"
module: "dataclasses"
source_url: "https://docs.python.org/3/library/dataclasses.html#dataclasses.is_dataclass"
license: "PSF"
updated: "2026-10-01"
---

# is_dataclass

Return `True` if its parameter is a dataclass (including subclasses of a
dataclass, but not including `generic aliases`)
or an instance of one, otherwise return `False`.

If you need to know if a class is an instance of a dataclass (and
not a dataclass itself), then add a further check for `not
isinstance(obj, type)`::

  def is_dataclass_instance(obj):
      return is_dataclass(obj) and not isinstance(obj, type)
