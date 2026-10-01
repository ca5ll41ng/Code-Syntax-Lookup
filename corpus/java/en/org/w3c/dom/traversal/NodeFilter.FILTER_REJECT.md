---
id: "java-en-function-nodefilter-filter_reject"
language: "java"
lang: "en"
category: "function"
name: "NodeFilter.FILTER_REJECT"
signature: "public static final short FILTER_REJECT = 2"
title: "NodeFilter.FILTER_REJECT"
directive: "field"
module: "java.xml/org.w3c.dom.traversal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/traversal/NodeFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NodeFilter.FILTER_REJECT

```java
public static final short FILTER_REJECT = 2
```

Reject the node. Navigation methods defined for
 NodeIterator or TreeWalker will not return
 this node. For TreeWalker, the children of this node
 will also be rejected. NodeIterators treat this as a
 synonym for FILTER_SKIP.
