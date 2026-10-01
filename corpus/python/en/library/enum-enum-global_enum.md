---
id: "python-en-function-enum-global_enum"
language: "python"
lang: "en"
category: "function"
name: "global_enum"
directive: "decorator"
module: "enum"
source_url: "https://docs.python.org/3/library/enum.html#enum.global_enum"
license: "PSF"
updated: "2026-10-01"
---

# global_enum

A decorator to change the `str()` and `repr` of an enum
to show its members as belonging to the module instead of its class.
Should only be used when the enum members are exported
to the module global namespace (see `re.RegexFlag` for an example).

> *Added in 3.11*
