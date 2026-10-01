---
id: "python-en-function-unicodedata-decomposition"
language: "python"
lang: "en"
category: "function"
name: "decomposition"
signature: "decomposition(chr, /)"
directive: "function"
module: "unicodedata"
source_url: "https://docs.python.org/3/library/unicodedata.html#unicodedata.decomposition"
license: "PSF"
updated: "2026-10-01"
---

# decomposition

Returns the character decomposition mapping assigned to the character
*chr* as string. An empty string is returned in case no such mapping is
defined. For example::

   >>> unicodedata.decomposition('Ã')
   '0041 0303'
