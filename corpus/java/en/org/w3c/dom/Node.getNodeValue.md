---
id: "java-en-function-node-getnodevalue"
language: "java"
lang: "en"
category: "function"
name: "Node.getNodeValue"
signature: "public String getNodeValue() throws DOMException"
title: "Node.getNodeValue"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Node.getNodeValue

```java
public String getNodeValue() throws DOMException
```

The value of this node, depending on its type; see the table above.
 When it is defined to be null, setting it has no effect,
 including if the node is read-only.

**异常**

- **DOMException** — DOMSTRING_SIZE_ERR: Raised when it would return more characters than fit in a DOMString variable on the implementation platform.
