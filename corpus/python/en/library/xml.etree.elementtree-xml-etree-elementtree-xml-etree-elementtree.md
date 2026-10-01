---
id: "python-en-function-xml-etree-elementtree-xml-etree-elementtree"
language: "python"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["B405"],"cwe":["CWE-20"]}
name: "xml.etree.elementtree"
title: "appropriate standards.  For example, \"UTF-8\" is valid, but \"UTF8\" is"
directive: "module"
module: "xml.etree.elementtree"
source_url: "https://docs.python.org/3/library/xml.etree.elementtree.html#module-xml.etree.elementtree"
license: "PSF"
updated: "2026-10-01"
---

# appropriate standards.  For example, "UTF-8" is valid, but "UTF8" is

#### Footnotes

.. [1] The encoding string included in XML output should conform to the
   appropriate standards.  For example, "UTF-8" is valid, but "UTF8" is
   not.  See https://www.w3.org/TR/2006/REC-xml11-20060816/#NT-EncodingDecl
   and https://www.iana.org/assignments/character-sets/character-sets.xhtml.
