---
id: "java-en-function-node-getparentnode"
language: "java"
lang: "en"
category: "function"
name: "Node.getParentNode"
signature: "public Node getParentNode()"
title: "Node.getParentNode"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Node.getParentNode

```java
public Node getParentNode()
```

The parent of this node. All nodes, except Attr,
 Document, DocumentFragment,
 Entity, and Notation may have a parent.
 However, if a node has just been created and not yet added to the
 tree, or if it has been removed from the tree, this is
 null.
