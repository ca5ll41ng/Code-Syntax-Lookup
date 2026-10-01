---
id: "java-en-function-javax-xml-transform-sax-saxtransformerfactory"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.transform.sax.SAXTransformerFactory"
title: "SAXTransformerFactory"
directive: "type"
module: "java.xml/javax.xml.transform.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/sax/SAXTransformerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SAXTransformerFactory

This class extends TransformerFactory to provide SAX-specific
 factory methods.  It provides two types of ContentHandlers,
 one for creating Transformers, the other for creating Templates
 objects.

 

If an application wants to set the ErrorHandler or EntityResolver
 for an XMLReader used during a transformation, it should use a URIResolver
 to return the SAXSource which provides (with getXMLReader) a reference to
 the XMLReader.

> *Since 1.4*
