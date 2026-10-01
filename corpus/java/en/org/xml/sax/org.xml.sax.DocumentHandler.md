---
id: "java-en-function-org-xml-sax-documenthandler"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.DocumentHandler"
title: "DocumentHandler"
directive: "type"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/DocumentHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentHandler

Receive notification of general document events.

 

This was the main event-handling interface for SAX1; in
 SAX2, it has been replaced by `org.xml.sax.ContentHandler
 ContentHandler`, which provides Namespace support and reporting
 of skipped entities.  This interface is included in SAX2 only
 to support legacy SAX1 applications.

 

The order of events in this interface is very important, and
 mirrors the order of information in the document itself.  For
 example, all of an element's content (character data, processing
 instructions, and/or subelements) will appear, in order, between
 the startElement event and the corresponding endElement event.

 

Application writers who do not want to implement the entire
 interface can derive a class from HandlerBase, which implements
 the default functionality; parser writers can instantiate
 HandlerBase to obtain a default handler.  The application can find
 the location of any document event using the Locator interface
 supplied by the Parser through the setDocumentLocator method.

**参见**

- org.xml.sax.Parser#setDocumentHandler
- org.xml.sax.Locator
- org.xml.sax.HandlerBase

> *Since 1.4, SAX 1.0*

> **⚠ Deprecated** — This interface has been replaced by the SAX2 `org.xml.sax.ContentHandler ContentHandler` interface, which includes Namespace support.
