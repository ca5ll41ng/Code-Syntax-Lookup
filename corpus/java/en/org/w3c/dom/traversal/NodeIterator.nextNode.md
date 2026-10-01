---
id: "java-en-function-nodeiterator-nextnode"
language: "java"
lang: "en"
category: "function"
name: "NodeIterator.nextNode"
signature: "public Node nextNode() throws DOMException"
title: "NodeIterator.nextNode"
directive: "method"
module: "java.xml/org.w3c.dom.traversal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/traversal/NodeIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NodeIterator.nextNode

```java
public Node nextNode() throws DOMException
```

Returns the next node in the set and advances the position of the
 NodeIterator in the set. After a
 NodeIterator is created, the first call to
 nextNode() returns the first node in the set.

**返回**

- The next Node in the set being iterated over, or null if there are no more members in that set.

**异常**

- **DOMException** — INVALID_STATE_ERR: Raised if this method is called after the detach method was invoked.
