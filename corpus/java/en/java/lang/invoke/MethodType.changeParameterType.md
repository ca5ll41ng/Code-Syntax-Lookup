---
id: "java-en-function-methodtype-changeparametertype"
language: "java"
lang: "en"
category: "function"
name: "MethodType.changeParameterType"
signature: "public MethodType changeParameterType(int num, Class<?> nptype)"
title: "MethodType.changeParameterType"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodType.changeParameterType

```java
public MethodType changeParameterType(int num, Class<?> nptype)
```

Finds or creates a method type with a single different parameter type.
 Convenience method for `methodType(java.lang.Class, java.lang.Class[]) methodType`.

**参数**

- **num** — the index (zero-based) of the parameter type to change
- **nptype** — a new parameter type to replace the old one with

**返回**

- the same type, except with the selected parameter changed

**异常**

- **IndexOutOfBoundsException** — if `num` is not a valid index into `parameterArray()`
- **IllegalArgumentException** — if `nptype` is `void.class`
- **NullPointerException** — if `nptype` is null
