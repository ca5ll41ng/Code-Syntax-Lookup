---
id: "java-en-function-org-xml-sax-handlerbase"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.HandlerBase"
title: "HandlerBase"
directive: "type"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/HandlerBase.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HandlerBase

Default base class for handlers.

 

This class implements the default behavior for four SAX1
 interfaces: EntityResolver, DTDHandler, DocumentHandler,
 and ErrorHandler.  It is now obsolete, but is included in SAX2 to
 support legacy SAX1 applications.  SAX2 applications should use
 the `org.xml.sax.helpers.DefaultHandler DefaultHandler`
 class instead.

 

Application writers can extend this class when they need to
 implement only part of an interface; parser writers can
 instantiate this class to provide default handlers when the
 application has not supplied its own.

 

Note that the use of this class is optional.

**参见**

- org.xml.sax.EntityResolver
- org.xml.sax.DTDHandler
- org.xml.sax.DocumentHandler
- org.xml.sax.ErrorHandler

> *Since 1.4, SAX 1.0*

> **⚠ Deprecated** — This class works with the deprecated `org.xml.sax.DocumentHandler DocumentHandler` interface.  It has been replaced by the SAX2 `org.xml.sax.helpers.DefaultHandler DefaultHandler` class.
