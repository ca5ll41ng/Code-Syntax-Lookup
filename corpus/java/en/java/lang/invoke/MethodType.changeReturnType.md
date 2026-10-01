---
id: "java-en-function-methodtype-changereturntype"
language: "java"
lang: "en"
category: "function"
name: "MethodType.changeReturnType"
signature: "public MethodType changeReturnType(Class<?> nrtype)"
title: "MethodType.changeReturnType"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodType.changeReturnType

```java
public MethodType changeReturnType(Class<?> nrtype)
```

Finds or creates a method type with a different return type.
 Convenience method for `methodType(java.lang.Class, java.lang.Class[]) methodType`.

**参数**

- **nrtype** — a return parameter type to replace the old one with

**返回**

- the same type, except with the return type change

**异常**

- **NullPointerException** — if `nrtype` is null
