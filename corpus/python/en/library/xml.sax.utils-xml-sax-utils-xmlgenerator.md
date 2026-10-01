---
id: "python-en-function-xml-sax-utils-xmlgenerator"
language: "python"
lang: "en"
category: "function"
name: "XMLGenerator"
signature: "XMLGenerator(out=None, encoding='iso-8859-1', short_empty_elements=False)"
directive: "class"
module: "xml.sax.utils"
source_url: "https://docs.python.org/3/library/xml.sax.utils.html#xml.sax.utils.XMLGenerator"
license: "PSF"
updated: "2026-10-01"
---

# XMLGenerator

This class implements the `~xml.sax.handler.ContentHandler` interface
by writing SAX
events back into an XML document. In other words, using an `XMLGenerator`
as the content handler will reproduce the original document being parsed. *out*
should be a file-like object which will default to *sys.stdout*. *encoding* is
the encoding of the output stream which defaults to `'iso-8859-1'`.
*short_empty_elements* controls the formatting of elements that contain no
content:  if `False` (the default) they are emitted as a pair of start/end
tags, if set to `True` they are emitted as a single self-closed tag.

> *Changed in 3.2*: Added the *short_empty_elements* parameter.
