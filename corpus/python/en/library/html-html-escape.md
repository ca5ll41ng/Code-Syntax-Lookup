---
id: "python-en-function-html-escape"
language: "python"
lang: "en"
category: "function"
name: "escape"
signature: "escape(s, quote=True)"
directive: "function"
module: "html"
source_url: "https://docs.python.org/3/library/html.html#html.escape"
license: "PSF"
updated: "2026-10-01"
---

# escape

Convert the characters `&`, `<` and `>` in string *s* to HTML-safe
sequences.  Use this if you need to display text that might contain such
characters in HTML.  If the optional flag *quote* is true (the default), the
characters (`"`) and (`'`) are also translated; this helps for inclusion
in an HTML attribute value delimited by quotes, as in `<a href="...">`.
If *quote* is set to false, the characters (`"`) and (`'`) are not
translated.

> *Added in 3.2*
