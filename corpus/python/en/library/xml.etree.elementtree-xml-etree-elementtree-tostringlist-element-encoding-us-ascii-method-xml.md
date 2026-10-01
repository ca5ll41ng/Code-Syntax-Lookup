---
id: "python-en-function-xml-etree-elementtree-tostringlist-element-encoding-us-ascii-method-xml"
language: "python"
lang: "en"
category: "function"
name: "tostringlist(element, encoding=\"us-ascii\", method=\"xml\", *, \\"
directive: "function"
module: "xml.etree.elementtree"
source_url: "https://docs.python.org/3/library/xml.etree.elementtree.html#xml.etree.elementtree.tostringlist(element, encoding=\"us-ascii\", method=\"xml\", *, \\"
license: "PSF"
updated: "2026-10-01"
---

# tostringlist(element, encoding="us-ascii", method="xml", *, \

Generates a string representation of an XML element, including all
subelements.  *element* is an `Element` instance.  *encoding* [1]_ is
the output encoding (default is US-ASCII).  Use `encoding="unicode"` to
generate a Unicode string (otherwise, a bytestring is generated).  *method*
is either `"xml"`, `"html"` or `"text"` (default is `"xml"`).
*xml_declaration*, *default_namespace*, *short_empty_elements* and
*standalone* has the same meaning as in `ElementTree.write`.
Returns a list of (optionally) encoded strings containing the XML data.
It does not guarantee any specific sequence,
except that `b"".join(tostringlist(element)) == tostring(element)`.

> *Added in 3.2*

> *Changed in 3.4*: Added the *short_empty_elements* parameter.

> *Changed in 3.8*: Added the *xml_declaration* and *default_namespace* parameters.

> *Changed in 3.8*: The :func:`tostringlist` function now preserves the attribute order specified by the user.

> *Changed in next*: Added the *standalone* parameter.
