---
id: "java-en-function-org-xml-sax-helpers-xmlfilterimpl"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.helpers.XMLFilterImpl"
title: "XMLFilterImpl"
directive: "type"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/XMLFilterImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLFilterImpl

Base class for deriving an XML filter.

 

This class is designed to sit between an `org.xml.sax.XMLReader
 XMLReader` and the client application's event handlers.  By default, it
 does nothing but pass requests up to the reader and events
 on to the handlers unmodified, but subclasses can override
 specific methods to modify the event stream or the configuration
 requests as they pass through.

**参见**

- org.xml.sax.XMLFilter
- org.xml.sax.XMLReader
- org.xml.sax.EntityResolver
- org.xml.sax.DTDHandler
- org.xml.sax.ContentHandler
- org.xml.sax.ErrorHandler

> *Since 1.4, SAX 2.0*
