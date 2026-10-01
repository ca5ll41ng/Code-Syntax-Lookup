---
id: "python-en-function-xml-sax-utils-escape"
language: "python"
lang: "en"
category: "function"
name: "escape"
signature: "escape(data, entities={})"
directive: "function"
module: "xml.sax.utils"
source_url: "https://docs.python.org/3/library/xml.sax.utils.html#xml.sax.utils.escape"
license: "PSF"
updated: "2026-10-01"
---

# escape

Escape `'&'`, `'<'`, and `'>'` in a string of data.

You can escape other strings of data by passing a dictionary as the optional
*entities* parameter.  The keys and values must all be strings; each key will be
replaced with its corresponding value.  The characters `'&'`, `'<'` and
`'>'` are always escaped, even if *entities* is provided.

> **Note**
>
> This function should only be used to escape characters that
> can't be used directly in XML. Do not use this function as a general
> string translation function.
>
