---
id: "java-en-function-org-xml-sax-saxparseexception"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.SAXParseException"
title: "SAXParseException"
directive: "type"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/SAXParseException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SAXParseException

Encapsulate an XML parse error or warning.

 

This exception may include information for locating the error
 in the original XML document, as if it came from a `Locator`
 object.  Note that although the application
 will receive a SAXParseException as the argument to the handlers
 in the `org.xml.sax.ErrorHandler ErrorHandler` interface,
 the application is not actually required to throw the exception;
 instead, it can simply read the information in it and take a
 different action.

 

Since this exception is a subclass of `org.xml.sax.SAXException
 SAXException`, it inherits the ability to wrap another exception.

**参见**

- org.xml.sax.SAXException
- org.xml.sax.Locator
- org.xml.sax.ErrorHandler

> *Since 1.4, SAX 1.0*
