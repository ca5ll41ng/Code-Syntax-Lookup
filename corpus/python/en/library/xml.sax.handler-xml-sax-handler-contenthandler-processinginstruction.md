---
id: "python-en-function-xml-sax-handler-contenthandler-processinginstruction"
language: "python"
lang: "en"
category: "function"
name: "ContentHandler.processingInstruction"
signature: "ContentHandler.processingInstruction(target, data)"
directive: "method"
module: "xml.sax.handler"
source_url: "https://docs.python.org/3/library/xml.sax.handler.html#xml.sax.handler.ContentHandler.processingInstruction"
license: "PSF"
updated: "2026-10-01"
---

# ContentHandler.processingInstruction

Receive notification of a processing instruction.

The Parser will invoke this method once for each processing instruction found:
note that processing instructions may occur before or after the main document
element.

A SAX parser should never report an XML declaration (XML 1.0, section 2.8) or a
text declaration (XML 1.0, section 4.3.1) using this method.
