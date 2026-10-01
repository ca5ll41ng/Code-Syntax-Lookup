---
id: "python-en-function-xml-sax-handler-contenthandler-startelement"
language: "python"
lang: "en"
category: "function"
name: "ContentHandler.startElement"
signature: "ContentHandler.startElement(name, attrs)"
directive: "method"
module: "xml.sax.handler"
source_url: "https://docs.python.org/3/library/xml.sax.handler.html#xml.sax.handler.ContentHandler.startElement"
license: "PSF"
updated: "2026-10-01"
---

# ContentHandler.startElement

Signals the start of an element in non-namespace mode.

The *name* parameter contains the raw XML 1.0 name of the element type as a
string and the *attrs* parameter holds an object of the
`Attributes` interface containing the attributes of
the element.  The object passed as *attrs* may be re-used by the parser; holding
on to a reference to it is not a reliable way to keep a copy of the attributes.
To keep a copy of the attributes, use the `copy` method of the *attrs*
object.
