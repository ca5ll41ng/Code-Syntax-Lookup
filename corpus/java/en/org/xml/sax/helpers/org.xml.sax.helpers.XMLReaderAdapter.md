---
id: "java-en-function-org-xml-sax-helpers-xmlreaderadapter"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.helpers.XMLReaderAdapter"
title: "XMLReaderAdapter"
directive: "type"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/XMLReaderAdapter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLReaderAdapter

Adapt a SAX2 XMLReader as a SAX1 Parser.

 

This class wraps a SAX2 `org.xml.sax.XMLReader XMLReader`
 and makes it act as a SAX1 `org.xml.sax.Parser Parser`.  The XMLReader
 must support a true value for the
 http://xml.org/sax/features/namespace-prefixes property or parsing will fail
 with a `org.xml.sax.SAXException SAXException`; if the XMLReader
 supports a false value for the http://xml.org/sax/features/namespaces
 property, that will also be used to improve efficiency.

**参见**

- org.xml.sax.Parser
- org.xml.sax.XMLReader

> *Since 1.4, SAX 2.0*
