---
id: "java-en-function-org-xml-sax-dtdhandler"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.DTDHandler"
title: "DTDHandler"
directive: "type"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/DTDHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DTDHandler

Receive notification of basic DTD-related events.

 

If a SAX application needs information about notations and
 unparsed entities, then the application implements this
 interface and registers an instance with the SAX parser using
 the parser's setDTDHandler method.  The parser uses the
 instance to report notation and unparsed entity declarations to
 the application.

 

Note that this interface includes only those DTD events that
 the XML recommendation requires processors to report:
 notation and unparsed entity declarations.

 

The SAX parser may report these events in any order, regardless
 of the order in which the notations and unparsed entities were
 declared; however, all DTD events must be reported after the
 document handler's startDocument event, and before the first
 startElement event.
 (If the `org.xml.sax.ext.LexicalHandler LexicalHandler` is
 used, these events must also be reported before the endDTD event.)
 

 

It is up to the application to store the information for
 future use (perhaps in a hash table or object tree).
 If the application encounters attributes of type "NOTATION",
 "ENTITY", or "ENTITIES", it can use the information that it
 obtained through this interface to find the entity and/or
 notation corresponding with the attribute value.

**参见**

- org.xml.sax.XMLReader#setDTDHandler

> *Since 1.4, SAX 1.0*
