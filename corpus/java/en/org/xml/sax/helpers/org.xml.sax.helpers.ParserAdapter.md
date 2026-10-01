---
id: "java-en-function-org-xml-sax-helpers-parseradapter"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.helpers.ParserAdapter"
title: "ParserAdapter"
directive: "type"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/ParserAdapter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ParserAdapter

Adapt a SAX1 Parser as a SAX2 XMLReader.

 

This class wraps a SAX1 `org.xml.sax.Parser Parser`
 and makes it act as a SAX2 `org.xml.sax.XMLReader XMLReader`,
 with feature, property, and Namespace support.  Note
 that it is not possible to report `skippedEntity
 skippedEntity` events, since SAX1 does not make that information available.

 

This adapter does not test for duplicate Namespace-qualified
 attribute names.

**参见**

- org.xml.sax.helpers.XMLReaderAdapter
- org.xml.sax.XMLReader
- org.xml.sax.Parser

> *Since 1.4, SAX 2.0*
