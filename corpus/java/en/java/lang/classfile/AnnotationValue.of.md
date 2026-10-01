---
id: "java-en-function-annotationvalue-of"
language: "java"
lang: "en"
category: "function"
name: "AnnotationValue.of"
signature: "static AnnotationValue of(Object value)"
title: "AnnotationValue.of"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/AnnotationValue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AnnotationValue.of

```java
static AnnotationValue of(Object value)
```

{@return an annotation element}  The `value` parameter must be
 a primitive, a wrapper of primitive, a String, a ClassDesc, an enum
 constant, or an array of one of these.

**参数**

- **value** — the annotation value

**异常**

- **IllegalArgumentException** — when the `value` parameter is not a primitive, a wrapper of primitive, a String, a ClassDesc, an enum constant, or an array of one of these; or any array has length over the limit of `#u2 u2`
