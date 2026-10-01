---
id: "python-en-function-xml-etree-elementtree-treebuilder-element_factory-none-comment_factory-none"
language: "python"
lang: "en"
category: "function"
name: "TreeBuilder(element_factory=None, *, comment_factory=None, \\"
directive: "class"
module: "xml.etree.elementtree"
source_url: "https://docs.python.org/3/library/xml.etree.elementtree.html#xml.etree.elementtree.TreeBuilder(element_factory=None, *, comment_factory=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# TreeBuilder(element_factory=None, *, comment_factory=None, \

Generic element structure builder.  This builder converts a sequence of
start, data, end, comment and pi method calls to a well-formed element
structure.  You can use this class to build an element structure using
a custom XML parser, or a parser for some other XML-like format.

*element_factory*, when given, must be a callable accepting two positional
arguments: a tag and a dict of attributes.  It is expected to return a new
element instance.

The *comment_factory* and *pi_factory* functions, when given, should behave
like the `Comment` and `ProcessingInstruction` functions to
create comments and processing instructions.  When not given, the default
factories will be used.  When *insert_comments* and/or *insert_pis* is true,
comments/pis will be inserted into the tree if they appear within the root
element (but not outside of it).

method:: close()

method:: data(data)

method:: end(tag)

method:: start(tag, attrs)

method:: comment(text)

method:: pi(target, text)

In addition, a custom `TreeBuilder` object can provide the
following methods:

method:: doctype(name, pubid, system)

method:: start_ns(prefix, uri)

method:: end_ns(prefix)
