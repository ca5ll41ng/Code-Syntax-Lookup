---
id: "java-en-function-nodeiterator-getwhattoshow"
language: "java"
lang: "en"
category: "function"
name: "NodeIterator.getWhatToShow"
signature: "public int getWhatToShow()"
title: "NodeIterator.getWhatToShow"
directive: "method"
module: "java.xml/org.w3c.dom.traversal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/traversal/NodeIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NodeIterator.getWhatToShow

```java
public int getWhatToShow()
```

This attribute determines which node types are presented via the
 NodeIterator. The available set of constants is defined
 in the NodeFilter interface.  Nodes not accepted by
 whatToShow will be skipped, but their children may still
 be considered. Note that this skip takes precedence over the filter,
 if any.
