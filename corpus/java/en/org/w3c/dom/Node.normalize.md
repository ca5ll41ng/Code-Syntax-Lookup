---
id: "java-en-function-node-normalize"
language: "java"
lang: "en"
category: "function"
name: "Node.normalize"
signature: "public void normalize()"
title: "Node.normalize"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Node.normalize

```java
public void normalize()
```

Puts all Text nodes in the full depth of the sub-tree
 underneath this Node, including attribute nodes, into a
 "normal" form where only structure (e.g., elements, comments,
 processing instructions, CDATA sections, and entity references)
 separates Text nodes, i.e., there are neither adjacent
 Text nodes nor empty Text nodes. This can
 be used to ensure that the DOM view of a document is the same as if
 it were saved and re-loaded, and is useful when operations (such as
 XPointer [XPointer]
  lookups) that depend on a particular document tree structure are to
 be used. If the parameter "normalize-characters" of the
 DOMConfiguration object attached to the
 Node.ownerDocument is true, this method
 will also fully normalize the characters of the Text
 nodes.
 

**Note:** In cases where the document contains
 CDATASections, the normalize operation alone may not be
 sufficient, since XPointers do not differentiate between
 Text nodes and CDATASection nodes.

> *Since 1.4, DOM Level 3*
