---
id: "python-en-function-pyexpat-xmlparser-endnamespacedeclhandler"
language: "python"
lang: "en"
category: "function"
name: "xmlparser.EndNamespaceDeclHandler"
signature: "xmlparser.EndNamespaceDeclHandler(prefix)"
directive: "method"
module: "pyexpat"
source_url: "https://docs.python.org/3/library/pyexpat.html#pyexpat.xmlparser.EndNamespaceDeclHandler"
license: "PSF"
updated: "2026-10-01"
---

# xmlparser.EndNamespaceDeclHandler

Called when the closing tag is reached for an element  that contained a
namespace declaration.  This is called once for each namespace declaration on
the element in the reverse of the order for which the
`StartNamespaceDeclHandler` was called to indicate the start of each
namespace declaration's scope.  Calls to this handler are made after the
corresponding `EndElementHandler` for the end of the element.
