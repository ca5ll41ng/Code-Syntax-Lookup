---
id: "java-en-function-methodhandledesc-ofconstructor"
language: "java"
lang: "en"
category: "function"
name: "MethodHandleDesc.ofConstructor"
signature: "static DirectMethodHandleDesc ofConstructor(ClassDesc owner, ClassDesc... paramTypes)"
title: "MethodHandleDesc.ofConstructor"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/MethodHandleDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandleDesc.ofConstructor

```java
static DirectMethodHandleDesc ofConstructor(ClassDesc owner, ClassDesc... paramTypes)
```

Returns a `MethodHandleDesc` corresponding to invocation of a constructor

**参数**

- **owner** — a `ClassDesc` describing the class containing the constructor
- **paramTypes** — `ClassDesc`s describing the parameter types of the constructor

**返回**

- the `MethodHandleDesc`

**异常**

- **NullPointerException** — if any argument or its contents is `null`
