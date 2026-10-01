---
id: "java-en-function-document-createcdatasection"
language: "java"
lang: "en"
category: "function"
name: "Document.createCDATASection"
signature: "public CDATASection createCDATASection(String data) throws DOMException"
title: "Document.createCDATASection"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Document.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Document.createCDATASection

```java
public CDATASection createCDATASection(String data) throws DOMException
```

Creates a CDATASection node whose value is the specified
 string.

**参数**

- **data** — The data for the CDATASection contents.

**返回**

- The new CDATASection object.

**异常**

- **DOMException** — NOT_SUPPORTED_ERR: Raised if this document is an HTML document.
