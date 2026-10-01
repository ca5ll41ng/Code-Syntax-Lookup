---
id: "java-en-function-node-comparedocumentposition"
language: "java"
lang: "en"
category: "function"
name: "Node.compareDocumentPosition"
signature: "public short compareDocumentPosition(Node other) throws DOMException"
title: "Node.compareDocumentPosition"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Node.compareDocumentPosition

```java
public short compareDocumentPosition(Node other) throws DOMException
```

Compares the reference node, i.e. the node on which this method is
 being called, with a node, i.e. the one passed as a parameter, with
 regard to their position in the document and according to the
 document order.

**参数**

- **other** — The node to compare against the reference node.

**返回**

- Returns how the node is positioned relatively to the reference node.

**异常**

- **DOMException** — NOT_SUPPORTED_ERR: when the compared nodes are from different DOM implementations that do not coordinate to return consistent implementation-specific results.

> *Since 1.5, DOM Level 3*
