---
id: "python-en-function-xml-etree-elementtree-default_loader"
language: "python"
lang: "en"
category: "function"
name: "default_loader"
signature: "default_loader(href, parse, encoding=None)"
directive: "function"
module: "xml.etree.elementtree"
source_url: "https://docs.python.org/3/library/xml.etree.elementtree.html#xml.etree.elementtree.default_loader"
license: "PSF"
updated: "2026-10-01"
---

# default_loader

Default loader. This default loader reads an included resource from disk.
*href* is a URL.  *parse* is for parse mode either "xml" or "text".
*encoding* is an optional text encoding.  If not given, encoding is `utf-8`.
Returns the expanded resource.
If the parse mode is `"xml"`, this is an `~xml.etree.ElementTree.Element` instance.
If the parse mode is `"text"`, this is a string.
If the loader fails, it can return `None` or raise an exception.
