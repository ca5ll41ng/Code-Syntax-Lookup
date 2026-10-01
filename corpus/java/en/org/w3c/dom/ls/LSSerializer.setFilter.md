---
id: "java-en-function-lsserializer-setfilter"
language: "java"
lang: "en"
category: "function"
name: "LSSerializer.setFilter"
signature: "public void setFilter(LSSerializerFilter filter)"
title: "LSSerializer.setFilter"
directive: "method"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/LSSerializer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LSSerializer.setFilter

```java
public void setFilter(LSSerializerFilter filter)
```

When the application provides a filter, the serializer will call out
 to the filter before serializing each Node. The filter implementation
 can choose to remove the node from the stream or to terminate the
 serialization early.
 
 The filter is invoked after the operations requested by the
 DOMConfiguration parameters have been applied. For
 example, CDATA sections won't be passed to the filter if
 "cdata-sections"
 is set to false.
