---
id: "java-en-function-nodefilter-acceptnode"
language: "java"
lang: "en"
category: "function"
name: "NodeFilter.acceptNode"
signature: "public short acceptNode(Node n)"
title: "NodeFilter.acceptNode"
directive: "method"
module: "java.xml/org.w3c.dom.traversal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/traversal/NodeFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NodeFilter.acceptNode

```java
public short acceptNode(Node n)
```

Test whether a specified node is visible in the logical view of a
 TreeWalker or NodeIterator. This function
 will be called by the implementation of TreeWalker and
 NodeIterator; it is not normally called directly from
 user code. (Though you could do so if you wanted to use the same
 filter to guide your own application logic.)

**参数**

- **n** — The node to check to see if it passes the filter or not.

**返回**

- A constant to determine whether the node is accepted, rejected, or skipped, as defined above.
