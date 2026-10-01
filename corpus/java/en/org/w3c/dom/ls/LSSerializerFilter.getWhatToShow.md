---
id: "java-en-function-lsserializerfilter-getwhattoshow"
language: "java"
lang: "en"
category: "function"
name: "LSSerializerFilter.getWhatToShow"
signature: "public int getWhatToShow()"
title: "LSSerializerFilter.getWhatToShow"
directive: "method"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/LSSerializerFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LSSerializerFilter.getWhatToShow

```java
public int getWhatToShow()
```

Tells the LSSerializer what types of nodes to show to the
 filter. If a node is not shown to the filter using this attribute, it
 is automatically serialized. See NodeFilter for
 definition of the constants. The constants SHOW_DOCUMENT
 , SHOW_DOCUMENT_TYPE, SHOW_DOCUMENT_FRAGMENT
 , SHOW_NOTATION, and SHOW_ENTITY are
 meaningless here, such nodes will never be passed to a
 LSSerializerFilter.
 
 Unlike [DOM Level 2 Traversal and      Range]
 , the SHOW_ATTRIBUTE constant indicates that the
 Attr nodes are shown and passed to the filter.
 
 The constants used here are defined in [DOM Level 2 Traversal and      Range]
 .
