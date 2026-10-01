---
id: "java-en-function-org-xml-sax-helpers-parserfactory"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.helpers.ParserFactory"
title: "ParserFactory"
directive: "type"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/ParserFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ParserFactory

Java-specific class for dynamically loading SAX parsers.

 

**Note:** This class is designed to work with the now-deprecated
 SAX1 `org.xml.sax.Parser Parser` class.  SAX2 applications should use
 `org.xml.sax.helpers.XMLReaderFactory XMLReaderFactory` instead.

 

ParserFactory is not part of the platform-independent definition
 of SAX; it is an additional convenience class designed
 specifically for Java XML application writers.  SAX applications
 can use the static methods in this class to allocate a SAX parser
 dynamically at run-time based either on the value of the
 `org.xml.sax.parser' system property or on a string containing the class
 name.

 

Note that the application still requires an XML parser that
 implements SAX1.

> *Since 1.4, SAX 1.0*

> **⚠ Deprecated** — This class works with the deprecated `org.xml.sax.Parser Parser` interface.
