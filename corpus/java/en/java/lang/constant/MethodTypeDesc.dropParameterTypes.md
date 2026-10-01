---
id: "java-en-function-methodtypedesc-dropparametertypes"
language: "java"
lang: "en"
category: "function"
name: "MethodTypeDesc.dropParameterTypes"
signature: "MethodTypeDesc dropParameterTypes(int start, int end)"
title: "MethodTypeDesc.dropParameterTypes"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/MethodTypeDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodTypeDesc.dropParameterTypes

```java
MethodTypeDesc dropParameterTypes(int start, int end)
```

Returns a `MethodTypeDesc` that is identical to this one,
 except that a range of parameter types have been removed.

**参数**

- **start** — the index of the first parameter to remove
- **end** — the index after the last parameter to remove

**返回**

- a `MethodTypeDesc` describing the desired method type

**异常**

- **IndexOutOfBoundsException** — if `start` is outside the half-open range `[0, parameterCount)`, or `end` is outside the closed range `[0, parameterCount]`, or if `start > end`
