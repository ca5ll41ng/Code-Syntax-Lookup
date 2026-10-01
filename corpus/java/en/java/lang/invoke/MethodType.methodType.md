---
id: "java-en-function-methodtype-methodtype"
language: "java"
lang: "en"
category: "function"
name: "MethodType.methodType"
signature: "public static MethodType methodType(Class<?> rtype, Class<?>[] ptypes)"
title: "MethodType.methodType"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodType.methodType

```java
public static MethodType methodType(Class<?> rtype, Class<?>[] ptypes)
```

Finds or creates an instance of the given method type.

**参数**

- **rtype** — the return type
- **ptypes** — the parameter types

**返回**

- a method type with the given components

**异常**

- **NullPointerException** — if `rtype` or `ptypes` or any element of `ptypes` is null
- **IllegalArgumentException** — if any element of `ptypes` is `void.class`
