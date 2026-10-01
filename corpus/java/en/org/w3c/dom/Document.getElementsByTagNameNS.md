---
id: "java-en-function-document-getelementsbytagnamens"
language: "java"
lang: "en"
category: "function"
name: "Document.getElementsByTagNameNS"
signature: "public NodeList getElementsByTagNameNS(String namespaceURI, String localName)"
title: "Document.getElementsByTagNameNS"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Document.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Document.getElementsByTagNameNS

```java
public NodeList getElementsByTagNameNS(String namespaceURI, String localName)
```

Returns a NodeList of all the Elements with a
 given local name and namespace URI in document order.

**参数**

- **namespaceURI** — The namespace URI of the elements to match on. The special value "*" matches all namespaces.
- **localName** — The local name of the elements to match on. The special value "*" matches all local names.

**返回**

- A new NodeList object containing all the matched Elements.

> *Since 1.4, DOM Level 2*
