---
id: "java-en-function-node-issamenode"
language: "java"
lang: "en"
category: "function"
name: "Node.isSameNode"
signature: "public boolean isSameNode(Node other)"
title: "Node.isSameNode"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Node.isSameNode

```java
public boolean isSameNode(Node other)
```

Returns whether this node is the same node as the given one.
 
This method provides a way to determine whether two
 Node references returned by the implementation reference
 the same object. When two Node references are references
 to the same object, even if through a proxy, the references may be
 used completely interchangeably, such that all attributes have the
 same values and calling the same DOM method on either reference
 always has exactly the same effect.

**参数**

- **other** — The node to test against.

**返回**

- Returns true if the nodes are the same, false otherwise.

> *Since 1.5, DOM Level 3*
