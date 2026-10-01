---
id: "python-en-function-pyexpat-xmlparser-attlistdeclhandler"
language: "python"
lang: "en"
category: "function"
name: "xmlparser.AttlistDeclHandler"
signature: "xmlparser.AttlistDeclHandler(elname, attname, type, default, required)"
directive: "method"
module: "pyexpat"
source_url: "https://docs.python.org/3/library/pyexpat.html#pyexpat.xmlparser.AttlistDeclHandler"
license: "PSF"
updated: "2026-10-01"
---

# xmlparser.AttlistDeclHandler

Called for each declared attribute for an element type.  If an attribute list
declaration declares three attributes, this handler is called three times, once
for each attribute.  *elname* is the name of the element to which the
declaration applies and *attname* is the name of the attribute declared.  The
The attribute type is a string passed as *type*:
`'CDATA'`, `'ID'`, `'IDREF'`, `'IDREFS'`, `'ENTITY'`,
`'ENTITIES'`, `'NMTOKEN'` or `'NMTOKENS'`,
an enumeration like `'(xy)'`,
or a notation list like `'NOTATION(n1n2)'`.
*default* gives the default value for
the attribute used when the attribute is not specified by the document instance,
or `None` if there is no default value (`#IMPLIED` values).  If the
attribute is required to be given in the document instance, *required* will be
true.
