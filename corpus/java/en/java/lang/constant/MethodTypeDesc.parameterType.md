---
id: "java-en-function-methodtypedesc-parametertype"
language: "java"
lang: "en"
category: "function"
name: "MethodTypeDesc.parameterType"
signature: "ClassDesc parameterType(int index)"
title: "MethodTypeDesc.parameterType"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/MethodTypeDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodTypeDesc.parameterType

```java
ClassDesc parameterType(int index)
```

Returns the parameter type of the `index`'th parameter of the method type
 described by this `MethodTypeDesc`.

**参数**

- **index** — the index of the parameter to retrieve

**返回**

- a `ClassDesc` describing the desired parameter type

**异常**

- **IndexOutOfBoundsException** — if the index is outside the half-open range `[0, parameterCount())`
