---
id: "java-en-function-lsparserfilter-getwhattoshow"
language: "java"
lang: "en"
category: "function"
name: "LSParserFilter.getWhatToShow"
signature: "public int getWhatToShow()"
title: "LSParserFilter.getWhatToShow"
directive: "method"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/LSParserFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LSParserFilter.getWhatToShow

```java
public int getWhatToShow()
```

Tells the LSParser what types of nodes to show to the
 method LSParserFilter.acceptNode. If a node is not shown
 to the filter using this attribute, it is automatically included in
 the DOM document being built. See NodeFilter for
 definition of the constants. The constants SHOW_ATTRIBUTE
 , SHOW_DOCUMENT, SHOW_DOCUMENT_TYPE,
 SHOW_NOTATION, SHOW_ENTITY, and
 SHOW_DOCUMENT_FRAGMENT are meaningless here. Those nodes
 will never be passed to LSParserFilter.acceptNode.
 
 The constants used here are defined in
 [DOM Level 2 Traversal and Range].
