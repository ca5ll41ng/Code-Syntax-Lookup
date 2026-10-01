---
id: "java-en-function-org-xml-sax-locator"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.Locator"
title: "Locator"
directive: "type"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/Locator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locator

Interface for associating a SAX event with a document location.

 

If a SAX parser provides location information to the SAX
 application, it does so by implementing this interface and then
 passing an instance to the application using the content
 handler's `setDocumentLocator
 setDocumentLocator` method.  The application can use the
 object to obtain the location of any other SAX event
 in the XML source document.

 

Note that the results returned by the object will be valid only
 during the scope of each callback method: the application
 will receive unpredictable results if it attempts to use the
 locator at any other time, or after parsing completes.

 

SAX parsers are not required to supply a locator, but they are
 very strongly encouraged to do so.  If the parser supplies a
 locator, it must do so before reporting any other document events.
 If no locator has been set by the time the application receives
 the `startDocument startDocument`
 event, the application should assume that a locator is not
 available.

**参见**

- org.xml.sax.ContentHandler#setDocumentLocator

> *Since 1.4, SAX 1.0*
