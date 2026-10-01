---
id: "python-zh-function-plistlib-load"
language: "python"
lang: "zh"
category: "function"
name: "load"
signature: "load(fp, *, fmt=None, dict_type=dict, aware_datetime=False)"
directive: "function"
module: "plistlib"
source_url: "https://docs.python.org/zh-cn/3/library/plistlib.html#plistlib.load"
license: "PSF"
updated: "2026-10-01"
---

# load

Read a plist file. *fp* should be a readable and binary file object.
Return the unpacked root object (which usually is a
dictionary).

*fmt* 为文件的格式，有效的值如下:

* `None`: Autodetect the file format

* `FMT_XML`: XML file format

* `FMT_BINARY`: Binary plist format

The *dict_type* is the type used for dictionaries that are read from the
plist file.

When *aware_datetime* is true, fields with type `datetime.datetime` will
be created as `aware object`, with
`tzinfo` as `datetime.UTC`.

XML data for the `FMT_XML` format is parsed using the Expat parser
from `xml.parsers.expat` -- see its documentation for possible
exceptions on ill-formed XML.  Unknown elements will simply be ignored
by the plist parser.

当文件无法被解析时解析器将引发 :exc:`InvalidFileException`。

> *Added in 3.4*

> *Changed in 3.13*: The keyword-only parameter *aware_datetime* has been added.
