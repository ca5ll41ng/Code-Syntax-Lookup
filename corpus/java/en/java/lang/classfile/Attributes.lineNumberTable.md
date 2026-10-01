---
id: "java-en-function-attributes-linenumbertable"
language: "java"
lang: "en"
category: "function"
name: "Attributes.lineNumberTable"
signature: "public static AttributeMapper<LineNumberTableAttribute> lineNumberTable()"
title: "Attributes.lineNumberTable"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/Attributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attributes.lineNumberTable

```java
public static AttributeMapper<LineNumberTableAttribute> lineNumberTable()
```

{@return the mapper for the `LineNumberTable` attribute}
 The mapper permits multiple instances in a `Code` attribute.
 This has a data dependency on `LABELS labels`.
