---
id: "java-en-function-org-xml-sax-xmlfilter"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.XMLFilter"
title: "XMLFilter"
directive: "type"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/XMLFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLFilter

Interface for an XML filter.

 

An XML filter is like an XML reader, except that it obtains its
 events from another XML reader rather than a primary source like
 an XML document or database.  Filters can modify a stream of
 events as they pass on to the final application.

 

The XMLFilterImpl helper class provides a convenient base
 for creating SAX2 filters, by passing on all `org.xml.sax.EntityResolver
 EntityResolver`, `org.xml.sax.DTDHandler DTDHandler`,
 `org.xml.sax.ContentHandler ContentHandler` and `org.xml.sax.ErrorHandler
 ErrorHandler` events automatically.

**参见**

- org.xml.sax.helpers.XMLFilterImpl

> *Since 1.4, SAX 2.0*
