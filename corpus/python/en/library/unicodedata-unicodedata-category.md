---
id: "python-en-function-unicodedata-category"
language: "python"
lang: "en"
category: "function"
name: "category"
signature: "category(chr, /)"
directive: "function"
module: "unicodedata"
source_url: "https://docs.python.org/3/library/unicodedata.html#unicodedata.category"
license: "PSF"
updated: "2026-10-01"
---

# category

Returns the general category assigned to the character *chr* as
string. General category names consist of two letters.
See the `General Category Values section of the Unicode Character
Database documentation <https://www.unicode.org/reports/tr44/#General_Category_Values>`_
for a list of category codes. For example::

   >>> unicodedata.category('A')  # 'L'etter, 'u'ppercase
   'Lu'
