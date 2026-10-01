---
id: "java-en-function-javax-xml-parsers-saxparser"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.parsers.SAXParser"
title: "SAXParser"
directive: "type"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/SAXParser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SAXParser

Defines the API that wraps an `org.xml.sax.XMLReader`
 implementation class. In JAXP 1.0, this class wrapped the
 `org.xml.sax.Parser` interface, however this interface was
 replaced by the `org.xml.sax.XMLReader`. For ease
 of transition, this class continues to support the same name
 and interface as well as supporting new methods.

 An instance of this class can be obtained from the
 `newSAXParser` method.
 Once an instance of this class is obtained, XML can be parsed from
 a variety of input sources. These input sources are InputStreams,
 Files, URLs, and SAX InputSources.

 This static method creates a new factory instance based
 on a system property setting or uses the platform default
 if no property has been defined.

 The system property that controls which Factory implementation
 to create is named &quot;javax.xml.parsers.SAXParserFactory&quot;.
 This property names a class that is a concrete subclass of this
 abstract class. If no property is defined, a platform default
 will be used.

 As the content is parsed by the underlying parser, methods of the
 given `org.xml.sax.HandlerBase` or the
 `org.xml.sax.helpers.DefaultHandler` are called.

 Implementors of this class which wrap an underlying implementation
 can consider using the `org.xml.sax.helpers.ParserAdapter`
 class to initially adapt their SAX1 implementation to work under
 this revised class.

> *Since 1.4*
