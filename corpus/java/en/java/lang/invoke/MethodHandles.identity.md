---
id: "java-en-function-methodhandles-identity"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.identity"
signature: "public static MethodHandle identity(Class<?> type)"
title: "MethodHandles.identity"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.identity

```java
public static MethodHandle identity(Class<?> type)
```

Produces a method handle which returns its sole argument when invoked.

**参数**

- **type** — the type of the sole parameter and return value of the desired method handle

**返回**

- a unary method handle which accepts and returns the given type

**异常**

- **NullPointerException** — if the argument is null
- **IllegalArgumentException** — if the given type is `void.class`
