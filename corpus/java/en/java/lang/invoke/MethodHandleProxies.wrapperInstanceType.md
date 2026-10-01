---
id: "java-en-function-methodhandleproxies-wrapperinstancetype"
language: "java"
lang: "en"
category: "function"
name: "MethodHandleProxies.wrapperInstanceType"
signature: "public static Class<?> wrapperInstanceType(Object x)"
title: "MethodHandleProxies.wrapperInstanceType"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandleProxies.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandleProxies.wrapperInstanceType

```java
public static Class<?> wrapperInstanceType(Object x)
```

Recovers the unique single-method interface type for which this wrapper instance was created.
 The object `x` must have been produced by a call to `asInterfaceInstance asInterfaceInstance`.
 This requirement may be tested via `isWrapperInstance isWrapperInstance`.

**参数**

- **x** — any reference

**返回**

- the single-method interface type for which the wrapper was created

**异常**

- **IllegalArgumentException** — if the reference x is not to a wrapper instance
