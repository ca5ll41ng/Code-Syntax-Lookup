---
id: "python-en-function-xml-etree-elementtree-elementtree"
language: "python"
lang: "en"
category: "function"
name: "ElementTree"
signature: "ElementTree(element=None, file=None)"
directive: "class"
module: "xml.etree.elementtree"
source_url: "https://docs.python.org/3/library/xml.etree.elementtree.html#xml.etree.elementtree.ElementTree"
license: "PSF"
updated: "2026-10-01"
---

# ElementTree

ElementTree wrapper class.  This class represents an entire element
hierarchy, and adds some extra support for serialization to and from
standard XML.

*element* is the root element.  The tree is initialized with the contents
of the XML *file* if given.

method:: _setroot(element)

method:: find(match, namespaces=None)

method:: findall(match, namespaces=None)

method:: findtext(match, default=None, namespaces=None)

method:: getroot()

method:: iter(tag=None)

method:: iterfind(match, namespaces=None)

method:: parse(source, parser=None)

method:: write(file, encoding="us-ascii", xml_declaration=None, \
