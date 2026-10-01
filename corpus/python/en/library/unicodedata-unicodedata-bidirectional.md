---
id: "python-en-function-unicodedata-bidirectional"
language: "python"
lang: "en"
category: "function"
name: "bidirectional"
signature: "bidirectional(chr, /)"
directive: "function"
module: "unicodedata"
source_url: "https://docs.python.org/3/library/unicodedata.html#unicodedata.bidirectional"
license: "PSF"
updated: "2026-10-01"
---

# bidirectional

Returns the bidirectional class assigned to the character *chr* as
string. If no such value is defined, an empty string is returned.
See the `Bidirectional Class Values section of the Unicode Character
Database <https://www.unicode.org/reports/tr44/#Bidi_Class_Values>`_
documentation for a list of bidirectional codes. For example::

   >>> unicodedata.bidirectional('\N{ARABIC-INDIC DIGIT SEVEN}') # 'A'rabic, 'N'umber
   'AN'
