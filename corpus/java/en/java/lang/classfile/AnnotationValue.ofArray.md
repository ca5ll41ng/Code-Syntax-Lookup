---
id: "java-en-function-annotationvalue-ofarray"
language: "java"
lang: "en"
category: "function"
name: "AnnotationValue.ofArray"
signature: "static OfArray ofArray(List<AnnotationValue> values)"
title: "AnnotationValue.ofArray"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/AnnotationValue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AnnotationValue.ofArray

```java
static OfArray ofArray(List<AnnotationValue> values)
```

{@return an array value for an element-value pair}

 See `values` for conventions
 on array values derived from Java source code.

**参数**

- **values** — the array elements

**异常**

- **IllegalArgumentException** — if the length of array exceeds the limit of `#u2 u2`
