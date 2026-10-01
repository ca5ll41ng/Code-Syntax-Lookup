---
id: "java-en-function-nodefilter-show_entity"
language: "java"
lang: "en"
category: "function"
name: "NodeFilter.SHOW_ENTITY"
signature: "public static final int SHOW_ENTITY = 0x00000020"
title: "NodeFilter.SHOW_ENTITY"
directive: "field"
module: "java.xml/org.w3c.dom.traversal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/traversal/NodeFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NodeFilter.SHOW_ENTITY

```java
public static final int SHOW_ENTITY = 0x00000020
```

Show Entity nodes. This is meaningful only when creating
 an NodeIterator or TreeWalker with an
 Entity node as its root; in this case, it
 means that the Entity node will appear in the first
 position of the traversal. Since entities are not part of the
 document tree, they do not appear when traversing over the document
 tree.
