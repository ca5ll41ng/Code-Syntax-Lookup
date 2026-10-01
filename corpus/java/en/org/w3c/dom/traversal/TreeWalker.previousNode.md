---
id: "java-en-function-treewalker-previousnode"
language: "java"
lang: "en"
category: "function"
name: "TreeWalker.previousNode"
signature: "public Node previousNode()"
title: "TreeWalker.previousNode"
directive: "method"
module: "java.xml/org.w3c.dom.traversal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/traversal/TreeWalker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TreeWalker.previousNode

```java
public Node previousNode()
```

Moves the TreeWalker to the previous visible node in
 document order relative to the current node, and returns the new
 node. If the current node has no previous node,  or if the search for
 previousNode attempts to step upward from the
 TreeWalker's root node,  returns
 null, and retains the current node.

**返回**

- The new node, or null if the current node has no previous node  in the TreeWalker's logical view.
