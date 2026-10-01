---
id: "python-en-function-xml-dom-minidom-node-writexml-writer-indent-addindent-newl"
language: "python"
lang: "en"
category: "function"
name: "Node.writexml(writer, indent=\"\", addindent=\"\", newl=\"\", \\"
directive: "method"
module: "xml.dom.minidom"
source_url: "https://docs.python.org/3/library/xml.dom.minidom.html#xml.dom.minidom.Node.writexml(writer, indent=\"\", addindent=\"\", newl=\"\", \\"
license: "PSF"
updated: "2026-10-01"
---

# Node.writexml(writer, indent="", addindent="", newl="", \

Write XML to the writer object.  The writer receives texts but not bytes as input,
it should have a `write` method which matches that of the file object
interface.  The *indent* parameter is the indentation of the current node.
The *addindent* parameter is the incremental indentation to use for subnodes
of the current one.  The *newl* parameter specifies the string to use to
terminate newlines.

For the `Document` node, an additional keyword argument *encoding* can
be used to specify the encoding field of the XML header.

Similarly, explicitly stating the *standalone* argument causes the
standalone document declarations to be added to the prologue of the XML
document.
If the value is set to `True`, `standalone="yes"` is added,
otherwise it is set to `"no"`.
Not stating the argument will omit the declaration from the document.

> *Changed in 3.8*: The :meth:`writexml` method now preserves the attribute order specified by the user.

> *Changed in 3.9*: The *standalone* parameter was added.

> *Changed in next*: Namespace declarations missing for the serialized element and its attributes are now written. It now works for :class:`!DocumentFragment` nodes.
