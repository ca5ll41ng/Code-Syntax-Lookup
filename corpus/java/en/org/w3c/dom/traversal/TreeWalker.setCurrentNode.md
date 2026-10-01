---
id: "java-en-function-treewalker-setcurrentnode"
language: "java"
lang: "en"
category: "function"
name: "TreeWalker.setCurrentNode"
signature: "public void setCurrentNode(Node currentNode) throws DOMException"
title: "TreeWalker.setCurrentNode"
directive: "method"
module: "java.xml/org.w3c.dom.traversal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/traversal/TreeWalker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TreeWalker.setCurrentNode

```java
public void setCurrentNode(Node currentNode) throws DOMException
```

The node at which the TreeWalker is currently positioned.
 
Alterations to the DOM tree may cause the current node to no longer
 be accepted by the TreeWalker's associated filter.
 currentNode may also be explicitly set to any node,
 whether or not it is within the subtree specified by the
 root node or would be accepted by the filter and
 whatToShow flags. Further traversal occurs relative to
 currentNode even if it is not part of the current view,
 by applying the filters in the requested direction; if no traversal
 is possible, currentNode is not changed.

**异常**

- **DOMException** — NOT_SUPPORTED_ERR: Raised if an attempt is made to set currentNode to null.
