---
id: "java-en-function-documenttype-getnotations"
language: "java"
lang: "en"
category: "function"
name: "DocumentType.getNotations"
signature: "public NamedNodeMap getNotations()"
title: "DocumentType.getNotations"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/DocumentType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentType.getNotations

```java
public NamedNodeMap getNotations()
```

A NamedNodeMap containing the notations declared in the
 DTD. Duplicates are discarded. Every node in this map also implements
 the Notation interface.
 
The DOM Level 2 does not support editing notations, therefore
 notations cannot be altered in any way.
