---
id: "java-en-function-targetinfo-ofclasstypeparameter"
language: "java"
lang: "en"
category: "function"
name: "TargetInfo.ofClassTypeParameter"
signature: "static TypeParameterTarget ofClassTypeParameter(int typeParameterIndex)"
title: "TargetInfo.ofClassTypeParameter"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/TypeAnnotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TargetInfo.ofClassTypeParameter

```java
static TypeParameterTarget ofClassTypeParameter(int typeParameterIndex)
```

{@return a target for annotations on a class type parameter declaration}

**参数**

- **typeParameterIndex** — specifies which type parameter declaration is annotated

**异常**

- **IllegalArgumentException** — if `typeParameterIndex` is not `#u1 u1`
