---
id: "java-en-function-typeargumenttarget-typeargumentindex"
language: "java"
lang: "en"
category: "function"
name: "TypeArgumentTarget.typeArgumentIndex"
signature: "int typeArgumentIndex()"
title: "TypeArgumentTarget.typeArgumentIndex"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/TypeAnnotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TypeArgumentTarget.typeArgumentIndex

```java
int typeArgumentIndex()
```

For a cast expression, the value of the type_argument_index item specifies which type in the cast
 operator is annotated. A type_argument_index value of 0 specifies the first (or only) type in the cast
 operator.

 The possibility of more than one type in a cast expression arises from a cast to an intersection type.

 For an explicit type argument list, the value of the type_argument_index item specifies which type argument
 is annotated. A type_argument_index value of 0 specifies the first type argument.

**返回**

- the index into the type arguments
