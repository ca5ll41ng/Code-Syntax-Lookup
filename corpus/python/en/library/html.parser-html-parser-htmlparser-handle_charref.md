---
id: "python-en-function-html-parser-htmlparser-handle_charref"
language: "python"
lang: "en"
category: "function"
name: "HTMLParser.handle_charref"
signature: "HTMLParser.handle_charref(name)"
directive: "method"
module: "html.parser"
source_url: "https://docs.python.org/3/library/html.parser.html#html.parser.HTMLParser.handle_charref"
license: "PSF"
updated: "2026-10-01"
---

# HTMLParser.handle_charref

This method is called to process decimal and hexadecimal numeric character
references of the form `&#{NNN};` and `&#x{NNN};`.  For example, the decimal
equivalent for `&gt;` is `&#62;`, whereas the hexadecimal is `&#x3E;`;
in this case the method will receive `'62'` or `'x3E'`.
This method is only called if *convert_charrefs* is false.
