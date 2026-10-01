---
id: "java-en-function-org-xml-sax-saxexception"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.SAXException"
title: "SAXException"
directive: "type"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/SAXException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SAXException

Encapsulate a general SAX error or warning.

 

This class can contain basic error or warning information from
 either the XML parser or the application: a parser writer or
 application writer can subclass it to provide additional
 functionality.  SAX handlers may throw this exception or
 any exception subclassed from it.

 

If the application needs to pass through other types of
 exceptions, it must wrap those exceptions in a SAXException
 or an exception derived from a SAXException.

 

If the parser or application needs to include information about a
 specific location in an XML document, it should use the
 `org.xml.sax.SAXParseException SAXParseException` subclass.

**参见**

- org.xml.sax.SAXParseException

> *Since 1.4, SAX 1.0*
