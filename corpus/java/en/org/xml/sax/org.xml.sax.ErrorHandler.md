---
id: "java-en-function-org-xml-sax-errorhandler"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.ErrorHandler"
title: "ErrorHandler"
directive: "type"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ErrorHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ErrorHandler

Basic interface for SAX error handlers.

 

If a SAX application needs to implement customized error
 handling, it must implement this interface and then register an
 instance with the XML reader using the
 `setErrorHandler setErrorHandler`
 method.  The parser will then report all errors and warnings
 through this interface.

 

**WARNING:** If an application does not
 register an ErrorHandler, XML parsing errors will go unreported,
 except that SAXParseExceptions will be thrown for fatal errors.
 In order to detect validity errors, an ErrorHandler that does something
 with `error error` calls must be registered.

 

For XML processing errors, a SAX driver must use this interface
 in preference to throwing an exception: it is up to the application
 to decide whether to throw an exception for different types of
 errors and warnings.  Note, however, that there is no requirement that
 the parser continue to report additional errors after a call to
 `fatalError fatalError`.  In other words, a SAX driver class
 may throw an exception after reporting any fatalError.
 Also parsers may throw appropriate exceptions for non-XML errors.
 For example, `parse XMLReader.parse` would throw
 an IOException for errors accessing entities or the document.

**参见**

- org.xml.sax.XMLReader#setErrorHandler
- org.xml.sax.SAXParseException

> *Since 1.4, SAX 1.0*
