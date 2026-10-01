---
id: "python-en-function-pyexpat-xmlparser-buffer_text"
language: "python"
lang: "en"
category: "function"
name: "xmlparser.buffer_text"
directive: "attribute"
module: "pyexpat"
source_url: "https://docs.python.org/3/library/pyexpat.html#pyexpat.xmlparser.buffer_text"
license: "PSF"
updated: "2026-10-01"
---

# xmlparser.buffer_text

Setting this to true causes the `xmlparser` object to buffer textual
content returned by Expat to avoid multiple calls to the
`CharacterDataHandler` callback whenever possible.  This can improve
performance substantially since Expat normally breaks character data into chunks
at every line ending.  This attribute is false by default, and may be changed at
any time. Note that when it is false, data that does not contain newlines
may be chunked too.
