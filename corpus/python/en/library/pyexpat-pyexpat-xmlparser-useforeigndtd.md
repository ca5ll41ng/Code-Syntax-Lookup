---
id: "python-en-function-pyexpat-xmlparser-useforeigndtd"
language: "python"
lang: "en"
category: "function"
name: "xmlparser.UseForeignDTD"
signature: "xmlparser.UseForeignDTD([flag])"
directive: "method"
module: "pyexpat"
source_url: "https://docs.python.org/3/library/pyexpat.html#pyexpat.xmlparser.UseForeignDTD"
license: "PSF"
updated: "2026-10-01"
---

# xmlparser.UseForeignDTD

Calling this with a true value for *flag* (the default) will cause Expat to call
the `ExternalEntityRefHandler` with `None` for all arguments to
allow an alternate DTD to be loaded.  If the document does not contain a
document type declaration, the `ExternalEntityRefHandler` will still be
called, but the `StartDoctypeDeclHandler` and
`EndDoctypeDeclHandler` will not be called.

Passing a false value for *flag* will cancel a previous call that passed a true
value, but otherwise has no effect.

This method can only be called before the `Parse` or `ParseFile`
methods are called; calling it after either of those have been called causes
`ExpatError` to be raised with the `code` attribute set to
`errors.codes[errors.XML_ERROR_CANT_CHANGE_FEATURE_ONCE_PARSING]`.
