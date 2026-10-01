---
id: "python-en-function-xml-dom-pulldom-parsestring"
language: "python"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["B319"],"cwe":["CWE-20"]}
name: "parseString"
signature: "parseString(string, parser=None)"
directive: "function"
module: "xml.dom.pulldom"
source_url: "https://docs.python.org/3/library/xml.dom.pulldom.html#xml.dom.pulldom.parseString"
license: "PSF"
updated: "2026-10-01"
---

# parseString

Return a `DOMEventStream` that represents the *string*.
*string* must be a `str` instance;
to parse bytes, pass a binary file object to `parse`.
