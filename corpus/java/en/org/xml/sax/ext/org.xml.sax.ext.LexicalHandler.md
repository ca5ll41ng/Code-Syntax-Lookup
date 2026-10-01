---
id: "java-en-function-org-xml-sax-ext-lexicalhandler"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.ext.LexicalHandler"
title: "LexicalHandler"
directive: "type"
module: "java.xml/org.xml.sax.ext"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ext/LexicalHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LexicalHandler

SAX2 extension handler for lexical events.

 

This is an optional extension handler for SAX2 to provide
 lexical information about an XML document, such as comments
 and CDATA section boundaries.
 XML readers are not required to recognize this handler, and it
 is not part of core-only SAX2 distributions.

 

The events in the lexical handler apply to the entire document,
 not just to the document element, and all lexical handler events
 must appear between the content handler's startDocument and
 endDocument events.

 

To set the LexicalHandler for an XML reader, use the
 `setProperty setProperty` method
 with the property name
 http://xml.org/sax/properties/lexical-handler
 and an object implementing this interface (or null) as the value.
 If the reader does not report lexical events, it will throw a
 `org.xml.sax.SAXNotRecognizedException SAXNotRecognizedException`
 when you attempt to register the handler.

> *Since 1.4, SAX 2.0 (extensions 1.0)*
