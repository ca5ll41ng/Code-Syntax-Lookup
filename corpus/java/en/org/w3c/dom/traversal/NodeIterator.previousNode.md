---
id: "java-en-function-nodeiterator-previousnode"
language: "java"
lang: "en"
category: "function"
name: "NodeIterator.previousNode"
signature: "public Node previousNode() throws DOMException"
title: "NodeIterator.previousNode"
directive: "method"
module: "java.xml/org.w3c.dom.traversal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/traversal/NodeIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NodeIterator.previousNode

```java
public Node previousNode() throws DOMException
```

Returns the previous node in the set and moves the position of the
 NodeIterator backwards in the set.

**返回**

- The previous Node in the set being iterated over, or null if there are no more members in that set.

**异常**

- **DOMException** — INVALID_STATE_ERR: Raised if this method is called after the detach method was invoked.
