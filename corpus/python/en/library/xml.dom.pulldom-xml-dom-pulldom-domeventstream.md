---
id: "python-en-function-xml-dom-pulldom-domeventstream"
language: "python"
lang: "en"
category: "function"
name: "DOMEventStream"
signature: "DOMEventStream(stream, parser, bufsize)"
directive: "class"
module: "xml.dom.pulldom"
source_url: "https://docs.python.org/3/library/xml.dom.pulldom.html#xml.dom.pulldom.DOMEventStream"
license: "PSF"
updated: "2026-10-01"
---

# DOMEventStream

Produce the events for the data read from the file object *stream*
by the `~xml.sax.xmlreader.XMLReader` *parser*.
The data is read by *bufsize* bytes, or characters for a text stream,
at a time.

> *Changed in 3.11*: Support for :meth:`~object.__getitem__` method has been removed.

method:: getEvent()

method:: expandNode(node)

method:: reset()

method:: clear()
