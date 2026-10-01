---
id: "python-en-function-xml-etree-elementtree-comment"
language: "python"
lang: "en"
category: "function"
name: "Comment"
signature: "Comment(text=None)"
directive: "function"
module: "xml.etree.elementtree"
source_url: "https://docs.python.org/3/library/xml.etree.elementtree.html#xml.etree.elementtree.Comment"
license: "PSF"
updated: "2026-10-01"
---

# Comment

Comment element factory.  This factory function creates a special element
that will be serialized as an XML comment by the standard serializer.
*text* is a string containing the comment string.
Returns an element instance representing a comment.

Note that `XMLParser` skips over comments in the input
instead of creating comment objects for them. An `ElementTree` will
only contain comment nodes if they have been inserted into to
the tree using one of the `Element` methods.
