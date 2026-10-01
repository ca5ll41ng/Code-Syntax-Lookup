---
id: "python-en-function-xml-sax-reader-inputsource-setbytestream"
language: "python"
lang: "en"
category: "function"
name: "InputSource.setByteStream"
signature: "InputSource.setByteStream(bytefile)"
directive: "method"
module: "xml.sax.reader"
source_url: "https://docs.python.org/3/library/xml.sax.reader.html#xml.sax.reader.InputSource.setByteStream"
license: "PSF"
updated: "2026-10-01"
---

# InputSource.setByteStream

Set the byte stream (a `binary file`) for this input source.

The SAX parser will ignore this if there is also a character stream specified,
but it will use a byte stream in preference to opening a URI connection itself.

If the application knows the character encoding of the byte stream, it should
set it with the setEncoding method.
