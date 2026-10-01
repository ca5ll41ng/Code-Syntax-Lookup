---
id: "java-en-function-org-xml-sax-helpers-defaulthandler"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.helpers.DefaultHandler"
title: "DefaultHandler"
directive: "type"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/DefaultHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DefaultHandler

Default base class for SAX2 event handlers.

 

This class is available as a convenience base class for SAX2
 applications: it provides default implementations for all of the
 callbacks in the four core SAX2 handler classes:

 
 
- `org.xml.sax.EntityResolver EntityResolver`
 
- `org.xml.sax.DTDHandler DTDHandler`
 
- `org.xml.sax.ContentHandler ContentHandler`
 
- `org.xml.sax.ErrorHandler ErrorHandler`
 

 

Application writers can extend this class when they need to
 implement only part of an interface; parser writers can
 instantiate this class to provide default handlers when the
 application has not supplied its own.

 

This class replaces the deprecated SAX1
 `org.xml.sax.HandlerBase HandlerBase` class.

**参见**

- org.xml.sax.EntityResolver
- org.xml.sax.DTDHandler
- org.xml.sax.ContentHandler
- org.xml.sax.ErrorHandler

> *Since 1.4, SAX 2.0*
