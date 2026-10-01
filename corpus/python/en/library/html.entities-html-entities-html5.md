---
id: "python-en-function-html-entities-html5"
language: "python"
lang: "en"
category: "function"
name: "html5"
directive: "data"
module: "html.entities"
source_url: "https://docs.python.org/3/library/html.entities.html#html.entities.html5"
license: "PSF"
updated: "2026-10-01"
---

# html5

A dictionary that maps HTML5 named character references [#]_ to the
equivalent Unicode character(s), e.g. `html5['gt;'] == '>'`.
Note that the trailing semicolon is included in the name (e.g. `'gt;'`),
however some of the names are accepted by the standard even without the
semicolon: in this case the name is present with and without the `';'`.
See also `html.unescape`.

> *Added in 3.3*
