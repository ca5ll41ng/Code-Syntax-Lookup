---
id: "python-en-function-xml-dom-registerdomimplementation"
language: "python"
lang: "en"
category: "function"
name: "registerDOMImplementation"
signature: "registerDOMImplementation(name, factory)"
directive: "function"
module: "xml.dom"
source_url: "https://docs.python.org/3/library/xml.dom.html#xml.dom.registerDOMImplementation"
license: "PSF"
updated: "2026-10-01"
---

# registerDOMImplementation

Register the *factory* function with the name *name*.  The factory function
should return an object which implements the `DOMImplementation`
interface.  The factory function can return the same object every time, or a new
one for each call, as appropriate for the specific implementation (e.g. if that
implementation supports some customization).
