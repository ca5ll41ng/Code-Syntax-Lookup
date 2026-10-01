---
id: "java-en-function-treewalker-nextnode"
language: "java"
lang: "en"
category: "function"
name: "TreeWalker.nextNode"
signature: "public Node nextNode()"
title: "TreeWalker.nextNode"
directive: "method"
module: "java.xml/org.w3c.dom.traversal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/traversal/TreeWalker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TreeWalker.nextNode

```java
public Node nextNode()
```

Moves the TreeWalker to the next visible node in document
 order relative to the current node, and returns the new node. If the
 current node has no next node, or if the search for nextNode attempts
 to step upward from the TreeWalker's root
 node, returns null, and retains the current node.

**返回**

- The new node, or null if the current node has no next node  in the TreeWalker's logical view.
