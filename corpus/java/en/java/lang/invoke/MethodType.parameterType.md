---
id: "java-en-function-methodtype-parametertype"
language: "java"
lang: "en"
category: "function"
name: "MethodType.parameterType"
signature: "public Class<?> parameterType(int num)"
title: "MethodType.parameterType"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodType.parameterType

```java
public Class<?> parameterType(int num)
```

Returns the parameter type at the specified index, within this method type.

**参数**

- **num** — the index (zero-based) of the desired parameter type

**返回**

- the selected parameter type

**异常**

- **IndexOutOfBoundsException** — if `num` is not a valid index into `parameterArray()`
