---
id: "java-en-function-typepathcomponent-typeargumentindex"
language: "java"
lang: "en"
category: "function"
name: "TypePathComponent.typeArgumentIndex"
signature: "int typeArgumentIndex()"
title: "TypePathComponent.typeArgumentIndex"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/TypeAnnotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TypePathComponent.typeArgumentIndex

```java
int typeArgumentIndex()
```

JVMS: type_argument_index
 If the value of the type_path_kind item is 0, 1, or 2, then the value of the type_argument_index item is 0.

 If the value of the type_path_kind item is 3, then the value of the type_argument_index item specifies which
 type argument of a parameterized type is annotated, where 0 indicates the first type argument of a
 parameterized type.

**返回**

- the index within the type component
