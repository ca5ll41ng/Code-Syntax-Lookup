---
id: "python-en-function-xml-etree-elementtree-include"
language: "python"
lang: "en"
category: "function"
name: "include"
signature: "include(elem, loader=None, base_url=None, max_depth=6)"
directive: "function"
module: "xml.etree.elementtree"
source_url: "https://docs.python.org/3/library/xml.etree.elementtree.html#xml.etree.elementtree.include"
license: "PSF"
updated: "2026-10-01"
---

# include

This function expands XInclude directives in-place in tree pointed by *elem*.
*elem* is either the root `~xml.etree.ElementTree.Element` or an
`~xml.etree.ElementTree.ElementTree` instance to find such element.
*loader* is an optional resource loader.  If omitted, it defaults to `default_loader`.
If given, it should be a callable that implements the same interface as
`default_loader`.  *base_url* is base URL of the original file, to resolve
relative include file references.  *max_depth* is the maximum number of recursive
inclusions.  Limited to reduce the risk of malicious content explosion.
Pass `None` to disable the limitation.

> *Changed in 3.9*: Added the *base_url* and *max_depth* parameters.
