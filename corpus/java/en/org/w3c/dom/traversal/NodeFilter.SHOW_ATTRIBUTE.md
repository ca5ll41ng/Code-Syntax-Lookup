---
id: "java-en-function-nodefilter-show_attribute"
language: "java"
lang: "en"
category: "function"
name: "NodeFilter.SHOW_ATTRIBUTE"
signature: "public static final int SHOW_ATTRIBUTE = 0x00000002"
title: "NodeFilter.SHOW_ATTRIBUTE"
directive: "field"
module: "java.xml/org.w3c.dom.traversal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/traversal/NodeFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NodeFilter.SHOW_ATTRIBUTE

```java
public static final int SHOW_ATTRIBUTE = 0x00000002
```

Show Attr nodes. This is meaningful only when creating an
 NodeIterator or TreeWalker with an
 attribute node as its root; in this case, it means that
 the attribute node will appear in the first position of the iteration
 or traversal. Since attributes are never children of other nodes,
 they do not appear when traversing over the document tree.
