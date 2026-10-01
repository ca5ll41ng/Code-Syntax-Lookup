---
id: "java-en-function-lsparser-parse"
language: "java"
lang: "en"
category: "function"
name: "LSParser.parse"
signature: "public Document parse(LSInput input) throws DOMException, LSException"
title: "LSParser.parse"
directive: "method"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/LSParser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LSParser.parse

```java
public Document parse(LSInput input) throws DOMException, LSException
```

Parse an XML document from a resource identified by a
 LSInput.

**参数**

- **input** — The LSInput from which the source of the document is to be read.

**返回**

- If the LSParser is a synchronous LSParser, the newly created and populated Document is returned. If the LSParser is asynchronous, null is returned since the document object may not yet be constructed when this method returns.

**异常**

- **DOMException** — INVALID_STATE_ERR: Raised if the LSParser's LSParser.busy attribute is true.
- **LSException** — PARSE_ERR: Raised if the LSParser was unable to load the XML document. DOM applications should attach a DOMErrorHandler using the parameter "error-handler" if they wish to get details on the error.
