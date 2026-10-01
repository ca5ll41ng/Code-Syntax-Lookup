---
id: "python-zh-function-zoneinfo-zoneinfo-from_file"
language: "python"
lang: "zh"
category: "function"
name: "ZoneInfo.from_file"
signature: "ZoneInfo.from_file(file_obj, /, key=None)"
directive: "classmethod"
module: "zoneinfo"
source_url: "https://docs.python.org/zh-cn/3/library/zoneinfo.html#zoneinfo.ZoneInfo.from_file"
license: "PSF"
updated: "2026-10-01"
---

# ZoneInfo.from_file

Constructs a `ZoneInfo` object from a file-like object returning bytes
(e.g. a file opened in binary mode or an `io.BytesIO` object).
Unlike the primary constructor, this always constructs a new object.

The `key` parameter sets the name of the zone for the purposes of
:py`~object.__str__` and :py`~object.__repr__`.

由此构造器创建的对象不可被封存 (参见 `pickling`_)。

`ValueError` is raised if the data read from *file_obj* is not a valid
TZif file.
