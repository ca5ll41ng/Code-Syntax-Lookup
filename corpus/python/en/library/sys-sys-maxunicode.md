---
id: "python-en-function-sys-maxunicode"
language: "python"
lang: "en"
category: "function"
name: "maxunicode"
directive: "data"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.maxunicode"
license: "PSF"
updated: "2026-10-01"
---

# maxunicode

An integer giving the value of the largest Unicode code point,
i.e. `1114111` (`0x10FFFF` in hexadecimal).

> *Changed in 3.3*: Before :pep:`393`, ``sys.maxunicode`` used to be either ``0xFFFF`` or ``0x10FFFF``, depending on the configuration option that specified whether Unicode characters were stored as UCS-2 or UCS-4.
