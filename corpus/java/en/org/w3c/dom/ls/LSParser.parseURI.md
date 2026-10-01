---
id: "java-en-function-lsparser-parseuri"
language: "java"
lang: "en"
category: "function"
name: "LSParser.parseURI"
signature: "public Document parseURI(String uri) throws DOMException, LSException"
title: "LSParser.parseURI"
directive: "method"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/LSParser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LSParser.parseURI

```java
public Document parseURI(String uri) throws DOMException, LSException
```

Parse an XML document from a location identified by a URI reference
 [IETF RFC 2396]. If the URI
 contains a fragment identifier (see section 4.1 in
 [IETF RFC 2396]), the
 behavior is not defined by this specification, future versions of
 this specification may define the behavior.

**参数**

- **uri** — The location of the XML document to be read.

**返回**

- If the LSParser is a synchronous LSParser, the newly created and populated Document is returned, or null if an error occurred. If the LSParser is asynchronous, null is returned since the document object may not yet be constructed when this method returns.

**异常**

- **DOMException** — INVALID_STATE_ERR: Raised if the LSParser.busy attribute is true.
- **LSException** — PARSE_ERR: Raised if the LSParser was unable to load the XML document. DOM applications should attach a DOMErrorHandler using the parameter "error-handler" if they wish to get details on the error.
