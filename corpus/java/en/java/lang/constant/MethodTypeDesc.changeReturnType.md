---
id: "java-en-function-methodtypedesc-changereturntype"
language: "java"
lang: "en"
category: "function"
name: "MethodTypeDesc.changeReturnType"
signature: "MethodTypeDesc changeReturnType(ClassDesc returnType)"
title: "MethodTypeDesc.changeReturnType"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/MethodTypeDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodTypeDesc.changeReturnType

```java
MethodTypeDesc changeReturnType(ClassDesc returnType)
```

Returns a `MethodTypeDesc` that is identical to
 this one, except with the specified return type.

**参数**

- **returnType** — a `ClassDesc` describing the new return type

**返回**

- a `MethodTypeDesc` describing the desired method type

**异常**

- **NullPointerException** — if the argument is `null`
