---
id: "python-en-function-xml-dom-getdomimplementation"
language: "python"
lang: "en"
category: "function"
name: "getDOMImplementation"
signature: "getDOMImplementation(name=None, features=())"
directive: "function"
module: "xml.dom"
source_url: "https://docs.python.org/3/library/xml.dom.html#xml.dom.getDOMImplementation"
license: "PSF"
updated: "2026-10-01"
---

# getDOMImplementation

Return a suitable DOM implementation. The *name* is either well-known, the
module name of a DOM implementation, or `None`. If it is not `None`, imports
the corresponding module and returns a `DOMImplementation` object if the
import succeeds.  If no name is given, and if the environment variable
`PYTHON_DOM` is set, this variable is used to find the implementation.
The only well-known name in the standard library is `'minidom'`,
for `xml.dom.minidom`.

If name is not given, this examines the available implementations to find one
with the required feature set.  If no implementation can be found, raise an
`ImportError`.  The features list must be a sequence of `(feature,
version)` pairs which are passed to the `~DOMImplementation.hasFeature`
method on available `DOMImplementation` objects.
