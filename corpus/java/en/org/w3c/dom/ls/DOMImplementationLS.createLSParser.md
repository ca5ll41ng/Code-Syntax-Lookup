---
id: "java-en-function-domimplementationls-createlsparser"
language: "java"
lang: "en"
category: "function"
name: "DOMImplementationLS.createLSParser"
signature: "public LSParser createLSParser(short mode, String schemaType) throws DOMException"
title: "DOMImplementationLS.createLSParser"
directive: "method"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/DOMImplementationLS.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DOMImplementationLS.createLSParser

```java
public LSParser createLSParser(short mode, String schemaType) throws DOMException
```

Create a new LSParser. The newly constructed parser may
 then be configured by means of its DOMConfiguration
 object, and used to parse documents by means of its parse
  method.

**参数**

- **mode** — The mode argument is either MODE_SYNCHRONOUS or MODE_ASYNCHRONOUS, if mode is MODE_SYNCHRONOUS then the LSParser that is created will operate in synchronous mode, if it's MODE_ASYNCHRONOUS then the LSParser that is created will operate in asynchronous mode.
- **schemaType** — An absolute URI representing the type of the schema language used during the load of a Document using the newly created LSParser. Note that no lexical checking is done on the absolute URI. In order to create a LSParser for any kind of schema types (i.e. the LSParser will be free to use any schema found), use the value null.   **Note:**    For W3C XML Schema [XML Schema Part 1] , applications must use the value "http://www.w3.org/2001/XMLSchema". For XML DTD [XML 1.0], applications must use the value "http://www.w3.org/TR/REC-xml". Other Schema languages are outside the scope of the W3C and therefore should recommend an absolute URI in order to use this method.

**返回**

- The newly created LSParser object. This LSParser is either synchronous or asynchronous depending on the value of the mode argument.   **Note:**    By default, the newly created LSParser does not contain a DOMErrorHandler, i.e. the value of the "error-handler" configuration parameter is null. However, implementations may provide a default error handler at creation time. In that case, the initial value of the "error-handler" configuration parameter on the new LSParser object contains a reference to the default error handler.

**异常**

- **DOMException** — NOT_SUPPORTED_ERR: Raised if the requested mode or schema type is not supported.
