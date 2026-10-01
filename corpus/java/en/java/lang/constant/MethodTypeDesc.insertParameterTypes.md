---
id: "java-en-function-methodtypedesc-insertparametertypes"
language: "java"
lang: "en"
category: "function"
name: "MethodTypeDesc.insertParameterTypes"
signature: "MethodTypeDesc insertParameterTypes(int pos, ClassDesc... paramTypes)"
title: "MethodTypeDesc.insertParameterTypes"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/MethodTypeDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodTypeDesc.insertParameterTypes

```java
MethodTypeDesc insertParameterTypes(int pos, ClassDesc... paramTypes)
```

Returns a `MethodTypeDesc` that is identical to this one,
 except that a range of additional parameter types have been inserted.

**参数**

- **pos** — the index at which to insert the first inserted parameter
- **paramTypes** — `ClassDesc`s describing the new parameter types to insert

**返回**

- a `MethodTypeDesc` describing the desired method type

**异常**

- **NullPointerException** — if any argument or its contents are `null`
- **IndexOutOfBoundsException** — if `pos` is outside the closed range `[0, parameterCount]`
- **IllegalArgumentException** — if any element of `paramTypes` is a `ClassDesc` for `void`
