---
id: "java-en-function-node-removechild"
language: "java"
lang: "en"
category: "function"
name: "Node.removeChild"
signature: "public Node removeChild(Node oldChild) throws DOMException"
title: "Node.removeChild"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Node.removeChild

```java
public Node removeChild(Node oldChild) throws DOMException
```

Removes the child node indicated by oldChild from the list
 of children, and returns it.

**参数**

- **oldChild** — The node being removed.

**返回**

- The node removed.

**异常**

- **DOMException** — NO_MODIFICATION_ALLOWED_ERR: Raised if this node is readonly.  NOT_FOUND_ERR: Raised if oldChild is not a child of this node.  NOT_SUPPORTED_ERR: if this node is of type Document, this exception might be raised if the DOM implementation doesn't support the removal of the DocumentType child or the Element child.

> *Since 1.4, DOM Level 3*
