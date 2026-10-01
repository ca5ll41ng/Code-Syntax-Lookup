---
id: "java-en-function-targetinfo-ofclasstypeparameterbound"
language: "java"
lang: "en"
category: "function"
name: "TargetInfo.ofClassTypeParameterBound"
signature: "static TypeParameterBoundTarget ofClassTypeParameterBound(int typeParameterIndex, int boundIndex)"
title: "TargetInfo.ofClassTypeParameterBound"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/TypeAnnotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TargetInfo.ofClassTypeParameterBound

```java
static TypeParameterBoundTarget ofClassTypeParameterBound(int typeParameterIndex, int boundIndex)
```

{@return a target for annotations on the i'th bound of the j'th type parameter declaration of
 a generic class, or interface}

**参数**

- **typeParameterIndex** — specifies which type parameter declaration is annotated
- **boundIndex** — specifies which bound of the type parameter declaration is annotated

**异常**

- **IllegalArgumentException** — if `typeParameterIndex` or `boundIndex` is not `#u1 u1`
