---
id: "java-en-function-methodhandledesc-invocationtype"
language: "java"
lang: "en"
category: "function"
name: "MethodHandleDesc.invocationType"
signature: "MethodTypeDesc invocationType()"
title: "MethodHandleDesc.invocationType"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/MethodHandleDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandleDesc.invocationType

```java
MethodTypeDesc invocationType()
```

Returns a `MethodTypeDesc` describing the invocation type of the
 method handle described by this nominal descriptor.  The invocation type
 describes the full set of stack values that are consumed by the invocation
 (including the receiver, if any).

**返回**

- a `MethodHandleDesc` describing the method handle type
