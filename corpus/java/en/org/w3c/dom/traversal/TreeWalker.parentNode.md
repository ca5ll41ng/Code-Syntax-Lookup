---
id: "java-en-function-treewalker-parentnode"
language: "java"
lang: "en"
category: "function"
name: "TreeWalker.parentNode"
signature: "public Node parentNode()"
title: "TreeWalker.parentNode"
directive: "method"
module: "java.xml/org.w3c.dom.traversal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/traversal/TreeWalker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TreeWalker.parentNode

```java
public Node parentNode()
```

Moves to and returns the closest visible ancestor node of the current
 node. If the search for parentNode attempts to step
 upward from the TreeWalker's root node, or
 if it fails to find a visible ancestor node, this method retains the
 current position and returns null.

**返回**

- The new parent node, or null if the current node has no parent  in the TreeWalker's logical view.
