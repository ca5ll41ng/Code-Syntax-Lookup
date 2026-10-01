---
id: "python-en-function-xml-dom-minidom-xml-dom-minidom"
language: "python"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["B408"],"cwe":["CWE-20"]}
name: "xml.dom.minidom"
title: "DOM Example"
directive: "module"
module: "xml.dom.minidom"
source_url: "https://docs.python.org/3/library/xml.dom.minidom.html#module-xml.dom.minidom"
license: "PSF"
updated: "2026-10-01"
---

# DOM Example

.. _dom-example:

**DOM Example**

This example program is a fairly realistic example of a simple program. In this
particular case, we do not take much advantage of the flexibility of the DOM.

literalinclude:: ../includes/minidom-example.py

.. _minidom-and-dom:

**minidom and the DOM standard**

The `xml.dom.minidom` module is essentially a DOM 1.0-compatible DOM with
some DOM 2 features (primarily namespace features).

Usage of the DOM interface in Python is straight-forward.  The following mapping
rules apply:

* Interfaces are accessed through instance objects. Applications should not
  instantiate the classes themselves; they should use the creator functions
  available on the `Document` object. Derived interfaces support all
  operations (and attributes) from the base interfaces, plus any new operations.

* Operations are used as methods. Since the DOM uses only `in`
  parameters, the arguments are passed in normal order (from left to right).
  There are no optional arguments. `void` operations return `None`.

* IDL attributes map to instance attributes. For compatibility with the OMG IDL
  language mapping for Python, an attribute `foo` can also be accessed through
  accessor methods `_get_foo` and `_set_foo`.  `readonly`
  attributes must not be changed; this is not enforced at runtime.

* The types `short int`, `unsigned int`, `unsigned long long`, and
  `boolean` all map to Python integer objects.

* The type `DOMString` maps to Python strings. `xml.dom.minidom` supports
  either bytes or strings, but will normally produce strings.
  Values of type `DOMString` may also be `None` where allowed to have the IDL
  `null` value by the DOM specification from the W3C.

* `const` declarations map to variables in their respective scope (e.g.
  `xml.dom.minidom.Node.PROCESSING_INSTRUCTION_NODE`); they must not be changed.

* `DOMException` is currently not supported in `xml.dom.minidom`.
  Instead, `xml.dom.minidom` uses standard Python exceptions such as
  `TypeError` and `AttributeError`.

* Each of the `~xml.dom.NodeList` and `~xml.dom.NamedNodeMap`
  interfaces has two implementations, which provide additional methods and
  operations.

  `~xml.dom.Node.childNodes` is a subclass of `list`, or, for
  nodes which cannot have children, a subclass of `tuple`.
  It supports iteration, concatenation, indexing and slicing.

  `~xml.dom.Node.attributes` supports `len()`, the `in`
  operator, subscription by a name or by a `(namespaceURI, localName)`
  tuple, assignment and deletion, and the methods `get`, `keys`,
  `keysNS`, `values`, `items` and `itemsNS`.
  `~xml.dom.DocumentType.entities` and
  `~xml.dom.DocumentType.notations` are read-only and support only
  `len()` and subscription by a name.

* `~xml.dom.Document.strictErrorChecking` is always `False`.

> *Changed in next*: Previously, :attr:`~xml.dom.Attr.specified` was always ``False``.

* The constraints of the DOM are now enforced,
  and the corresponding exceptions are raised.

> *Changed in next*: Previously, many invalid operations silently succeeded and produced an invalid document, but removing an absent attribute raised :exc:`~xml.dom.NotFoundErr`.

> *Changed in next*: Namespaces are now validated in the factory methods and when setting :attr:`~xml.dom.Node.prefix` of an attribute.

The following interfaces have no implementation in `xml.dom.minidom`:

* `DOMTimeStamp`

This reflects information in the XML document that is not of general
utility to most DOM users.

> *Changed in next*: :class:`~xml.dom.EntityReference` is now implemented. Note that the parser expands entity references, so they only occur in a document if created explicitly.

#### Footnotes

.. [1] The encoding name included in the XML output should conform to
   the appropriate standards. For example, "UTF-8" is valid, but
   "UTF8" is not valid in an XML document's declaration, even though
   Python accepts it as an encoding name.
   See https://www.w3.org/TR/2006/REC-xml11-20060816/#NT-EncodingDecl
   and https://www.iana.org/assignments/character-sets/character-sets.xhtml.
