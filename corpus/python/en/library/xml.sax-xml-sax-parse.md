---
id: "python-en-function-xml-sax-parse"
language: "python"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["B317"],"cwe":["CWE-20"]}
name: "parse"
signature: "parse(filename_or_stream, handler, errorHandler=handler.ErrorHandler())"
directive: "function"
module: "xml.sax"
source_url: "https://docs.python.org/3/library/xml.sax.html#xml.sax.parse"
license: "PSF"
updated: "2026-10-01"
---

# parse

Create a SAX parser and use it to parse a document.  The document, passed in as
*filename_or_stream*, can be a system identifier (a string identifying the
input source -- typically a file name or a URL),
a `path-like` object, or a file object.
A system identifier which does not refer to an existing file
is opened with `urllib.request.urlopen`.
The *handler*
parameter needs to be a SAX `~handler.ContentHandler` instance.  If
*errorHandler* is given, it must be a SAX `~handler.ErrorHandler`
instance; if
omitted,  `SAXParseException` will be raised on all errors.  There is no
return value; all work must be done by the *handler* passed in.
