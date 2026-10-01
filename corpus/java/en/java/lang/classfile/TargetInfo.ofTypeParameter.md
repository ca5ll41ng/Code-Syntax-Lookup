---
id: "java-en-function-targetinfo-oftypeparameter"
language: "java"
lang: "en"
category: "function"
name: "TargetInfo.ofTypeParameter"
signature: "static TypeParameterTarget ofTypeParameter(TargetType targetType, int typeParameterIndex)"
title: "TargetInfo.ofTypeParameter"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/TypeAnnotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TargetInfo.ofTypeParameter

```java
static TypeParameterTarget ofTypeParameter(TargetType targetType, int typeParameterIndex)
```

{@return a target for annotations on a class or method type parameter declaration}

**参数**

- **targetType** — `CLASS_TYPE_PARAMETER` or `METHOD_TYPE_PARAMETER`
- **typeParameterIndex** — specifies which type parameter declaration is annotated

**异常**

- **IllegalArgumentException** — if `typeParameterIndex` is not `#u1 u1`
