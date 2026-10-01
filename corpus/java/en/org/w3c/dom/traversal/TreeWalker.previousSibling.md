---
id: "java-en-function-treewalker-previoussibling"
language: "java"
lang: "en"
category: "function"
name: "TreeWalker.previousSibling"
signature: "public Node previousSibling()"
title: "TreeWalker.previousSibling"
directive: "method"
module: "java.xml/org.w3c.dom.traversal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/traversal/TreeWalker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TreeWalker.previousSibling

```java
public Node previousSibling()
```

Moves the TreeWalker to the previous sibling of the
 current node, and returns the new node. If the current node has no
 visible previous sibling, returns null, and retains the
 current node.

**返回**

- The new node, or null if the current node has no previous sibling.  in the TreeWalker's logical view.
