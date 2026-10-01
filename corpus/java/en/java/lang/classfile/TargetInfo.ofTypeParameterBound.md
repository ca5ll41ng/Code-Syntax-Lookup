---
id: "java-en-function-targetinfo-oftypeparameterbound"
language: "java"
lang: "en"
category: "function"
name: "TargetInfo.ofTypeParameterBound"
signature: "static TypeParameterBoundTarget ofTypeParameterBound(TargetType targetType, int typeParameterIndex, int boundIndex)"
title: "TargetInfo.ofTypeParameterBound"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/TypeAnnotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TargetInfo.ofTypeParameterBound

```java
static TypeParameterBoundTarget ofTypeParameterBound(TargetType targetType, int typeParameterIndex, int boundIndex)
```

{@return a target for annotations on the i'th bound of the j'th type parameter declaration of
 a generic class, interface, method, or constructor}

**参数**

- **targetType** — `CLASS_TYPE_PARAMETER_BOUND` or `METHOD_TYPE_PARAMETER_BOUND`
- **typeParameterIndex** — specifies which type parameter declaration is annotated
- **boundIndex** — specifies which bound of the type parameter declaration is annotated

**异常**

- **IllegalArgumentException** — if `typeParameterIndex` or `boundIndex` is not `#u1 u1`
