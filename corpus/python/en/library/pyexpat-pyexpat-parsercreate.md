---
id: "python-en-function-pyexpat-parsercreate"
language: "python"
lang: "en"
category: "function"
name: "ParserCreate"
signature: "ParserCreate(encoding=None, namespace_separator=None, intern=None)"
directive: "function"
module: "pyexpat"
source_url: "https://docs.python.org/3/library/pyexpat.html#pyexpat.ParserCreate"
license: "PSF"
updated: "2026-10-01"
---

# ParserCreate

Creates and returns a new `xmlparser` object.
*encoding* [1]_, if specified, must be a string naming the encoding
used by the XML data.
If it is given it will override the implicit or explicit encoding
of the document.

impl-detail::

.. _xmlparser-non-root:

Parsers created through `ParserCreate` are called "root" parsers,
in the sense that they do not have any parent parser attached. Non-root
parsers are created by `parser.ExternalEntityParserCreate`.

Expat can optionally do XML namespace processing for you, enabled by providing a
value for *namespace_separator*.  The value must be a one-character string; a
`ValueError` will be raised if the string has an illegal length (`None`
is considered the same as omission).  When namespace processing is enabled,
element type names and attribute names that belong to a namespace will be
expanded.  The element name passed to the element handlers
`StartElementHandler` and `EndElementHandler` will be the
concatenation of the namespace URI, the namespace separator character, and the
local part of the name.  If the namespace separator is a zero byte (`chr(0)`)
then the namespace URI and the local part will be concatenated without any
separator.

For example, if *namespace_separator* is set to a space character (`' '`) and
the following document is parsed:

```xml

<?xml version="1.0"?>
<root xmlns    = "http://default-namespace.org/"
      xmlns:py = "http://www.python.org/ns/">
  <py:elem1 />
  <elem2 xmlns="" />
</root>
```

`StartElementHandler` will receive the following strings for each
element::

   http://default-namespace.org/ root
   http://www.python.org/ns/ elem1
   elem2

*intern*, if given, must be a dictionary.
It is used to intern the names of elements and attributes,
and is available as the `~xmlparser.intern` attribute.
By default a new empty dictionary is created for every parser.

Due to limitations in the `Expat` library used by `pyexpat`,
the `xmlparser` instance returned can only be used to parse a single
XML document.  Call `ParserCreate` for each document to provide unique
parser instances.
