---
id: "java-en-function-org-xml-sax-xmlreader"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.XMLReader"
title: "XMLReader"
directive: "type"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/XMLReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLReader

Interface for reading an XML document using callbacks.

 

XMLReader is the interface that an XML parser's SAX2 driver must
 implement.  This interface allows an application to set and
 query features and properties in the parser, to register
 event handlers for document processing, and to initiate
 a document parse.

 

All SAX interfaces are assumed to be synchronous: the
 `parse parse` methods must not return until parsing
 is complete, and readers must wait for an event-handler callback
 to return before reporting the next event.

 

This interface replaces the (now deprecated) SAX 1.0 `org.xml.sax.Parser Parser` interface.  The XMLReader interface
 contains two important enhancements over the old Parser
 interface (as well as some minor ones):

 
 
- it adds a standard way to query and set features and
  properties; and
 
- it adds Namespace support, which is required for many
  higher-level XML standards.
 

 

There are adapters available to convert a SAX1 Parser to
 a SAX2 XMLReader and vice-versa.

 not extend the standard Java `java.io.Reader Reader`
 interface, because reading XML is a fundamentally different activity
 than reading character data.

**参见**

- org.xml.sax.XMLFilter
- org.xml.sax.helpers.ParserAdapter
- org.xml.sax.helpers.XMLReaderAdapter

> *Since 1.4, SAX 2.0*
