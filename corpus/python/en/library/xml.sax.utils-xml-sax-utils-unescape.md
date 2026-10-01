---
id: "python-en-function-xml-sax-utils-unescape"
language: "python"
lang: "en"
category: "function"
name: "unescape"
signature: "unescape(data, entities={})"
directive: "function"
module: "xml.sax.utils"
source_url: "https://docs.python.org/3/library/xml.sax.utils.html#xml.sax.utils.unescape"
license: "PSF"
updated: "2026-10-01"
---

# unescape

Unescape `'&amp;'`, `'&lt;'`, and `'&gt;'` in a string of data.

You can unescape other strings of data by passing a dictionary as the optional
*entities* parameter.  The keys and values must all be strings; each key will be
replaced with its corresponding value.  `'&amp;'`, `'&lt;'`, and `'&gt;'`
are always unescaped, even if *entities* is provided.
