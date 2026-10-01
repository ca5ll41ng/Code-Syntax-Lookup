---
id: "python-en-function-pyexpat-xmlparser-ordered_attributes"
language: "python"
lang: "en"
category: "function"
name: "xmlparser.ordered_attributes"
directive: "attribute"
module: "pyexpat"
source_url: "https://docs.python.org/3/library/pyexpat.html#pyexpat.xmlparser.ordered_attributes"
license: "PSF"
updated: "2026-10-01"
---

# xmlparser.ordered_attributes

Setting this attribute to a non-zero integer causes the attributes to be
reported as a list rather than a dictionary.  The attributes are presented in
the order found in the document text.  For each attribute, two list entries are
presented: the attribute name and the attribute value.  (Older versions of this
module also used this format.)  By default, this attribute is false; it may be
changed at any time.
