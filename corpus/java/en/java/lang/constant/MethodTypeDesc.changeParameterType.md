---
id: "java-en-function-methodtypedesc-changeparametertype"
language: "java"
lang: "en"
category: "function"
name: "MethodTypeDesc.changeParameterType"
signature: "MethodTypeDesc changeParameterType(int index, ClassDesc paramType)"
title: "MethodTypeDesc.changeParameterType"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/MethodTypeDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodTypeDesc.changeParameterType

```java
MethodTypeDesc changeParameterType(int index, ClassDesc paramType)
```

Returns a `MethodTypeDesc` that is identical to this one,
 except that a single parameter type has been changed to the specified type.

**参数**

- **index** — the index of the parameter to change
- **paramType** — a `ClassDesc` describing the new parameter type

**返回**

- a `MethodTypeDesc` describing the desired method type

**异常**

- **NullPointerException** — if any argument is `null`
- **IndexOutOfBoundsException** — if the index is outside the half-open range `[0, parameterCount)`
