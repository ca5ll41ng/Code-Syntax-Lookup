---
id: "java-en-function-attr-getschematypeinfo"
language: "java"
lang: "en"
category: "function"
name: "Attr.getSchemaTypeInfo"
signature: "public TypeInfo getSchemaTypeInfo()"
title: "Attr.getSchemaTypeInfo"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Attr.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attr.getSchemaTypeInfo

```java
public TypeInfo getSchemaTypeInfo()
```

The type information associated with this attribute. While the type
 information contained in this attribute is guarantee to be correct
 after loading the document or invoking
 Document.normalizeDocument(), schemaTypeInfo
  may not be reliable if the node was moved.

> *Since 1.5, DOM Level 3*
