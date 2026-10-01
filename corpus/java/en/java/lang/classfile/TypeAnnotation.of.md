---
id: "java-en-function-typeannotation-of"
language: "java"
lang: "en"
category: "function"
name: "TypeAnnotation.of"
signature: "static TypeAnnotation of(TargetInfo targetInfo, List<TypePathComponent> targetPath, Annotation annotation)"
title: "TypeAnnotation.of"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/TypeAnnotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TypeAnnotation.of

```java
static TypeAnnotation of(TargetInfo targetInfo, List<TypePathComponent> targetPath, Annotation annotation)
```

{@return a `type_annotation` structure}

**参数**

- **targetInfo** — which type in a declaration or expression is annotated
- **targetPath** — which part of the type is annotated
- **annotation** — the annotation

**异常**

- **IllegalArgumentException** — if the size of `targetPath` exceeds the limit of `#u1 u1`
