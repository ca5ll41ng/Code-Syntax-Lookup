---
id: "python-en-function-enum-enumdict"
language: "python"
lang: "en"
category: "function"
name: "EnumDict"
directive: "class"
module: "enum"
source_url: "https://docs.python.org/3/library/enum.html#enum.EnumDict"
license: "PSF"
updated: "2026-10-01"
---

# EnumDict

*EnumDict* is a subclass of `dict` that is used as the namespace
for defining enum classes (see `prepare`).
It is exposed to allow subclasses of `EnumType` with advanced
behavior like having multiple values per member.
It should be called with the name of the enum class being created, otherwise
private names and internal classes will not be handled correctly.

Note that only the `~collections.abc.MutableMapping` interface
(`~object.__setitem__` and `~dict.update`) is overridden.
It may be possible to bypass the checks using other `dict`
operations like `|=`.

attribute:: EnumDict.member_names

> *Added in 3.13*
