---
id: "java-en-function-methodhandledesc-astype"
language: "java"
lang: "en"
category: "function"
name: "MethodHandleDesc.asType"
signature: "default MethodHandleDesc asType(MethodTypeDesc type)"
title: "MethodHandleDesc.asType"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/MethodHandleDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandleDesc.asType

```java
default MethodHandleDesc asType(MethodTypeDesc type)
```

Returns a `MethodHandleDesc` that describes this method handle
 adapted to a different type, as if by `asType`.

**参数**

- **type** — a `MethodHandleDesc` describing the new method type

**返回**

- a `MethodHandleDesc` for the adapted method handle

**异常**

- **NullPointerException** — if the argument is `null`
