---
id: "python-en-function-xml-etree-elementtree-subelement"
language: "python"
lang: "en"
category: "function"
name: "SubElement"
signature: "SubElement(parent, tag, /, attrib={}, **extra)"
directive: "function"
module: "xml.etree.elementtree"
source_url: "https://docs.python.org/3/library/xml.etree.elementtree.html#xml.etree.elementtree.SubElement"
license: "PSF"
updated: "2026-10-01"
---

# SubElement

Subelement factory.  This function creates an element instance, and appends
it to an existing element.

*parent* is the parent element.  *tag* is
the subelement name.  *attrib* is an optional dictionary, containing element
attributes.  *extra* contains additional attributes, given as keyword
arguments.  Returns an element instance.

> *Changed in 3.15*: *attrib* can now be a :class:`frozendict`.

> *Changed in 3.15*: *parent* and *tag* are now positional-only parameters.
