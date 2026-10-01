---
id: "python-en-function-xml-sax-reader-inputsource"
language: "python"
lang: "en"
category: "function"
name: "InputSource"
signature: "InputSource(system_id=None)"
directive: "class"
module: "xml.sax.reader"
source_url: "https://docs.python.org/3/library/xml.sax.reader.html#xml.sax.reader.InputSource"
license: "PSF"
updated: "2026-10-01"
---

# InputSource

Encapsulation of the information needed by the `XMLReader` to read
entities.

This class may include information about the public identifier, system
identifier, byte stream (possibly with character encoding information) and/or
the character stream of an entity.

Applications will create objects of this class for use in the
`XMLReader.parse` method and for returning from
EntityResolver.resolveEntity.

An `InputSource` belongs to the application, the `XMLReader` is
not allowed to modify `InputSource` objects passed to it from the
application, although it may make copies and modify those.
