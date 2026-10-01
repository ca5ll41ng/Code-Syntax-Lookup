---
id: "java-en-function-lsparser-getfilter"
language: "java"
lang: "en"
category: "function"
name: "LSParser.getFilter"
signature: "public LSParserFilter getFilter()"
title: "LSParser.getFilter"
directive: "method"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/LSParser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LSParser.getFilter

```java
public LSParserFilter getFilter()
```

When a filter is provided, the implementation will call out to the
 filter as it is constructing the DOM tree structure. The filter can
 choose to remove elements from the document being constructed, or to
 terminate the parsing early.
 
 The filter is invoked after the operations requested by the
 DOMConfiguration parameters have been applied. For
 example, if "validate"
 is set to true, the validation is done before invoking the
 filter.
