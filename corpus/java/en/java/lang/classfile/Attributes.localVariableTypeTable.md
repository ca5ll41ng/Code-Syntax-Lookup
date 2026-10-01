---
id: "java-en-function-attributes-localvariabletypetable"
language: "java"
lang: "en"
category: "function"
name: "Attributes.localVariableTypeTable"
signature: "public static AttributeMapper<LocalVariableTypeTableAttribute> localVariableTypeTable()"
title: "Attributes.localVariableTypeTable"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/Attributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attributes.localVariableTypeTable

```java
public static AttributeMapper<LocalVariableTypeTableAttribute> localVariableTypeTable()
```

{@return the mapper for the `LocalVariableTypeTable` attribute}
 The mapper permits multiple instances in a given location.
 This has a data dependency on `LABELS labels`.
