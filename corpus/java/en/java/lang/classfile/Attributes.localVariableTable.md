---
id: "java-en-function-attributes-localvariabletable"
language: "java"
lang: "en"
category: "function"
name: "Attributes.localVariableTable"
signature: "public static AttributeMapper<LocalVariableTableAttribute> localVariableTable()"
title: "Attributes.localVariableTable"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/Attributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attributes.localVariableTable

```java
public static AttributeMapper<LocalVariableTableAttribute> localVariableTable()
```

{@return the mapper for the `LocalVariableTable` attribute}
 The mapper permits multiple instances in a `Code` attribute.
 This has a data dependency on `LABELS labels`.
