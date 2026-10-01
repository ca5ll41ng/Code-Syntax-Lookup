---
id: "python-en-function-pyexpat-xmlparser-specified_attributes"
language: "python"
lang: "en"
category: "function"
name: "xmlparser.specified_attributes"
directive: "attribute"
module: "pyexpat"
source_url: "https://docs.python.org/3/library/pyexpat.html#pyexpat.xmlparser.specified_attributes"
license: "PSF"
updated: "2026-10-01"
---

# xmlparser.specified_attributes

If set to a non-zero integer, the parser will report only those attributes which
were specified in the document instance and not those which were derived from
attribute declarations.  Applications which set this need to be especially
careful to use what additional information is available from the declarations as
needed to comply with the standards for the behavior of XML processors.  By
default, this attribute is false; it may be changed at any time.
