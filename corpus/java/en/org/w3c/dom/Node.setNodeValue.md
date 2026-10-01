---
id: "java-en-function-node-setnodevalue"
language: "java"
lang: "en"
category: "function"
name: "Node.setNodeValue"
signature: "public void setNodeValue(String nodeValue) throws DOMException"
title: "Node.setNodeValue"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Node.setNodeValue

```java
public void setNodeValue(String nodeValue) throws DOMException
```

The value of this node, depending on its type; see the table above.
 When it is defined to be null, setting it has no effect,
 including if the node is read-only.

**异常**

- **DOMException** — NO_MODIFICATION_ALLOWED_ERR: Raised when the node is readonly and if it is not defined to be null.
