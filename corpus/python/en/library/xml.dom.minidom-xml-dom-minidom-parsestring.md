---
id: "python-en-function-xml-dom-minidom-parsestring"
language: "python"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["B318"],"cwe":["CWE-20"]}
name: "parseString"
signature: "parseString(string, parser=None)"
directive: "function"
module: "xml.dom.minidom"
source_url: "https://docs.python.org/3/library/xml.dom.minidom.html#xml.dom.minidom.parseString"
license: "PSF"
updated: "2026-10-01"
---

# parseString

Return a `Document` that represents the *string*. This method creates an
`io.StringIO` object for the string and passes that on to `parse`.
