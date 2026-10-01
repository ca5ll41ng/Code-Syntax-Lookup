---
id: "python-en-function-xml-dom-node-previoussibling"
language: "python"
lang: "en"
category: "function"
name: "Node.previousSibling"
directive: "attribute"
module: "xml.dom"
source_url: "https://docs.python.org/3/library/xml.dom.html#xml.dom.Node.previousSibling"
license: "PSF"
updated: "2026-10-01"
---

# Node.previousSibling

The node that immediately precedes this one with the same parent.  For
instance the element with an end-tag that comes just before the *self*
element's start-tag.  Of course, XML documents are made up of more than just
elements so the previous sibling could be text, a comment, or something else.
If this node is the first child of the parent, this attribute will be
`None`. This is a read-only attribute.
