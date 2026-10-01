---
id: "java-en-function-node-getbaseuri"
language: "java"
lang: "en"
category: "function"
name: "Node.getBaseURI"
signature: "public String getBaseURI()"
title: "Node.getBaseURI"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Node.getBaseURI

```java
public String getBaseURI()
```

The absolute base URI of this node or null if the
 implementation wasn't able to obtain an absolute URI. This value is
 computed as described in . However, when the Document
 supports the feature "HTML" [DOM Level 2 HTML]
 , the base URI is computed using first the value of the href
 attribute of the HTML BASE element if any, and the value of the
 documentURI attribute from the Document
 interface otherwise.

> *Since 1.5, DOM Level 3*
