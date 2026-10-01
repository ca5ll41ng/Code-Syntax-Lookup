---
id: "java-en-function-ofarray-values"
language: "java"
lang: "en"
category: "function"
name: "OfArray.values"
signature: "List<AnnotationValue> values()"
title: "OfArray.values"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/AnnotationValue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OfArray.values

```java
List<AnnotationValue> values()
```

{@return the array elements of the array value}

 All array elements derived from Java source code have the same type,
 which must not be an array type. (JLS {@jls 9.6.1}) If such elements are
 annotations, they have the same annotation interface; if such elements
 are enum, they belong to the same enum class.
