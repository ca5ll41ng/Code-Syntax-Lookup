---
id: "java-en-function-nodefilter-filter_skip"
language: "java"
lang: "en"
category: "function"
name: "NodeFilter.FILTER_SKIP"
signature: "public static final short FILTER_SKIP = 3"
title: "NodeFilter.FILTER_SKIP"
directive: "field"
module: "java.xml/org.w3c.dom.traversal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/traversal/NodeFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NodeFilter.FILTER_SKIP

```java
public static final short FILTER_SKIP = 3
```

Skip this single node. Navigation methods defined for
 NodeIterator or TreeWalker will not return
 this node. For both NodeIterator and
 TreeWalker, the children of this node will still be
 considered.
