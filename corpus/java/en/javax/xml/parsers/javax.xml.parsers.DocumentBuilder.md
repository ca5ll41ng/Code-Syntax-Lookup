---
id: "java-en-function-javax-xml-parsers-documentbuilder"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.parsers.DocumentBuilder"
title: "DocumentBuilder"
directive: "type"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/DocumentBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentBuilder

Defines the API to obtain DOM Document instances from an XML
 document. Using this class, an application programmer can obtain a
 `Document` from XML.

 An instance of this class can be obtained from the
 `newDocumentBuilder` method. Once
 an instance of this class is obtained, XML can be parsed from a
 variety of input sources. These input sources are InputStreams,
 Files, URLs, and SAX InputSources.

 Note that this class reuses several classes from the SAX API. This
 does not require that the implementor of the underlying DOM
 implementation use a SAX parser to parse XML document into a
 Document. It merely requires that the implementation
 communicate with the application using these existing APIs.

> *Since 1.4*
