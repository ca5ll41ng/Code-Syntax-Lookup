---
id: "java-en-function-methodhandles-throwexception"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.throwException"
signature: "public static MethodHandle throwException(Class<?> returnType, Class<? extends Throwable> exType)"
title: "MethodHandles.throwException"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.throwException

```java
public static MethodHandle throwException(Class<?> returnType, Class<? extends Throwable> exType)
```

Produces a method handle which will throw exceptions of the given `exType`.
 The method handle will accept a single argument of `exType`,
 and immediately throw it as an exception.
 The method type will nominally specify a return of `returnType`.
 The return type may be anything convenient:  It doesn't matter to the
 method handle's behavior, since it will never return normally.

**参数**

- **returnType** — the return type of the desired method handle
- **exType** — the parameter type of the desired method handle

**返回**

- method handle which can throw the given exceptions

**异常**

- **NullPointerException** — if either argument is null
