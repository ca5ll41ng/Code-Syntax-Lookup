---
id: "java-en-function-typeparam-of"
language: "java"
lang: "en"
category: "function"
name: "TypeParam.of"
signature: "public static TypeParam of(String identifier, RefTypeSig classBound, RefTypeSig... interfaceBounds)"
title: "TypeParam.of"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/Signature.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TypeParam.of

```java
public static TypeParam of(String identifier, RefTypeSig classBound, RefTypeSig... interfaceBounds)
```

{@return a signature for a type parameter}

**参数**

- **identifier** — the name of the type parameter
- **classBound** — the class bound of the type parameter, may be `null`
- **interfaceBounds** — the interface bounds of the type parameter

**异常**

- **IllegalArgumentException** — if the name cannot be `#identifier denoted`
