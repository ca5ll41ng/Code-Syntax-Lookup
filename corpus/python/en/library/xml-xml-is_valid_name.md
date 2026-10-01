---
id: "python-en-function-xml-is_valid_name"
language: "python"
lang: "en"
category: "function"
name: "is_valid_name"
signature: "is_valid_name(name)"
directive: "function"
module: "xml"
source_url: "https://docs.python.org/3/library/xml.html#xml.is_valid_name"
license: "PSF"
updated: "2026-10-01"
---

# is_valid_name

Return `True` if the string is a valid element or attribute name,
`False` otherwise.

Almost all characters are permitted in names, except control characters and
those which either are or reasonably could be used as delimiters.
Characters like ":", "-", ".", "_", and "·" are permitted, but "<", "/",
"!", "?", and "=" are forbidden.
The name cannot start with a digit or a character like "-", ".", and "·".

> *Added in 3.15*
