---
id: "python-en-function-string-printable"
language: "python"
lang: "en"
category: "function"
name: "printable"
directive: "data"
module: "string"
source_url: "https://docs.python.org/3/library/string.html#string.printable"
license: "PSF"
updated: "2026-10-01"
---

# printable

String of ASCII characters which are considered printable by Python.
This is a combination of `digits`, `ascii_letters`,
`punctuation`, and `whitespace`.

> **Note**
>
> By design, `string.printable.isprintable()`
> returns `False`. In particular, `string.printable` is not
> printable in the POSIX sense (see `LC_CTYPE`).
>
