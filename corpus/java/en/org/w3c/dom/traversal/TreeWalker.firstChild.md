---
id: "java-en-function-treewalker-firstchild"
language: "java"
lang: "en"
category: "function"
name: "TreeWalker.firstChild"
signature: "public Node firstChild()"
title: "TreeWalker.firstChild"
directive: "method"
module: "java.xml/org.w3c.dom.traversal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/traversal/TreeWalker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TreeWalker.firstChild

```java
public Node firstChild()
```

Moves the TreeWalker to the first visible child of the
 current node, and returns the new node. If the current node has no
 visible children, returns null, and retains the current
 node.

**返回**

- The new node, or null if the current node has no visible children  in the TreeWalker's logical view.
