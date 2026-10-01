---
id: "python-en-function-xml-etree-elementtree-xmlparser"
language: "python"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["B314"],"cwe":["CWE-20"]}
name: "XMLParser"
signature: "XMLParser(*, target=None, encoding=None)"
directive: "class"
module: "xml.etree.elementtree"
source_url: "https://docs.python.org/3/library/xml.etree.elementtree.html#xml.etree.elementtree.XMLParser"
license: "PSF"
updated: "2026-10-01"
---

# XMLParser

This class is the low-level building block of the module.  It uses
`xml.parsers.expat` for efficient, event-based parsing of XML.  It can
be fed XML data incrementally with the `feed` method, and parsing
events are translated to a push API - by invoking callbacks on the *target*
object.  If *target* is omitted, the standard `TreeBuilder` is used.
If *encoding* [1]_ is given, the value overrides the
encoding specified in the XML file.

> *Changed in 3.8*: Parameters are now :ref:`keyword-only <keyword-only_parameter>`. The *html* argument is no longer supported.

method:: close()

method:: feed(data)

method:: flush()

`XMLParser.feed` calls *target*\'s `start(tag, attrs_dict)` method
for each opening tag, its `end(tag)` method for each closing tag, and data
is processed by method `data(data)`.  For further supported callback
methods, see the `TreeBuilder` class.  `XMLParser.close` calls
*target*\'s method `close()`. `XMLParser` can be used not only for
building a tree structure. This is an example of counting the maximum depth
of an XML file::

 >>> from xml.etree.ElementTree import XMLParser
 >>> class MaxDepth:                     # The target object of the parser
 ...     maxDepth = 0
 ...     depth = 0
 ...     def start(self, tag, attrib):   # Called for each opening tag.
 ...         self.depth += 1
 ...         if self.depth > self.maxDepth:
 ...             self.maxDepth = self.depth
 ...     def end(self, tag):             # Called for each closing tag.
 ...         self.depth -= 1
 ...     def data(self, data):
 ...         pass            # We do not need to do anything with data.
 ...     def close(self):    # Called when all data has been parsed.
 ...         return self.maxDepth
 ...
 >>> target = MaxDepth()
 >>> parser = XMLParser(target=target)
 >>> exampleXml = """
 ... <a>
 ...   <b>
 ...   </b>
 ...   <b>
 ...     <c>
 ...       <d>
 ...       </d>
 ...     </c>
 ...   </b>
 ... </a>"""
 >>> parser.feed(exampleXml)
 >>> parser.close()
 4
