---
id: "python-en-function-xml-dom-pulldom-pulldom"
language: "python"
lang: "en"
category: "function"
name: "PullDOM"
signature: "PullDOM(documentFactory=None)"
directive: "class"
module: "xml.dom.pulldom"
source_url: "https://docs.python.org/3/library/xml.dom.pulldom.html#xml.dom.pulldom.PullDOM"
license: "PSF"
updated: "2026-10-01"
---

# PullDOM

Subclass of `xml.sax.handler.ContentHandler` which turns SAX events
into the events of the pull parser.
The nodes are created, but they are not added to the tree,
unless `~DOMEventStream.expandNode` is called.
*documentFactory*, if given, is a DOM implementation used to create
the document; by default the implementation of `xml.dom.minidom`
is used.
