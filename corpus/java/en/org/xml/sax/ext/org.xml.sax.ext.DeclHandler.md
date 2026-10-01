---
id: "java-en-function-org-xml-sax-ext-declhandler"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.ext.DeclHandler"
title: "DeclHandler"
directive: "type"
module: "java.xml/org.xml.sax.ext"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ext/DeclHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DeclHandler

SAX2 extension handler for DTD declaration events.

 

This is an optional extension handler for SAX2 to provide more
 complete information about DTD declarations in an XML document.
 XML readers are not required to recognize this handler, and it
 is not part of core-only SAX2 distributions.

 

Note that data-related DTD declarations (unparsed entities and
 notations) are already reported through the `org.xml.sax.DTDHandler DTDHandler` interface.

 

If you are using the declaration handler together with a lexical
 handler, all of the events will occur between the
 `startDTD startDTD` and the
 `endDTD endDTD` events.

 

To set the DeclHandler for an XML reader, use the
 `setProperty setProperty` method
 with the property name
 http://xml.org/sax/properties/declaration-handler
 and an object implementing this interface (or null) as the value.
 If the reader does not report declaration events, it will throw a
 `org.xml.sax.SAXNotRecognizedException SAXNotRecognizedException`
 when you attempt to register the handler.

> *Since 1.4, SAX 2.0 (extensions 1.0)*
