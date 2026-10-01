---
id: "java-en-function-nodefilter-show_notation"
language: "java"
lang: "en"
category: "function"
name: "NodeFilter.SHOW_NOTATION"
signature: "public static final int SHOW_NOTATION = 0x00000800"
title: "NodeFilter.SHOW_NOTATION"
directive: "field"
module: "java.xml/org.w3c.dom.traversal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/traversal/NodeFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NodeFilter.SHOW_NOTATION

```java
public static final int SHOW_NOTATION = 0x00000800
```

Show Notation nodes. This is meaningful only when creating
 an NodeIterator or TreeWalker with a
 Notation node as its root; in this case, it
 means that the Notation node will appear in the first
 position of the traversal. Since notations are not part of the
 document tree, they do not appear when traversing over the document
 tree.
