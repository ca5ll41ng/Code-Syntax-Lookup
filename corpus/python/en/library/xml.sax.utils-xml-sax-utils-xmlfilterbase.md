---
id: "python-en-function-xml-sax-utils-xmlfilterbase"
language: "python"
lang: "en"
category: "function"
name: "XMLFilterBase"
signature: "XMLFilterBase(base)"
directive: "class"
module: "xml.sax.utils"
source_url: "https://docs.python.org/3/library/xml.sax.utils.html#xml.sax.utils.XMLFilterBase"
license: "PSF"
updated: "2026-10-01"
---

# XMLFilterBase

This class is designed to sit between an
`~xml.sax.xmlreader.XMLReader` and the client
application's event handlers.  By default, it does nothing but pass requests up
to the reader and events on to the handlers unmodified, but subclasses can
override specific methods to modify the event stream or the configuration
requests as they pass through.

method:: getParent()

method:: setParent(parent)
