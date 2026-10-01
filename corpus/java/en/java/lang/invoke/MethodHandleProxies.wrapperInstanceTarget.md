---
id: "java-en-function-methodhandleproxies-wrapperinstancetarget"
language: "java"
lang: "en"
category: "function"
name: "MethodHandleProxies.wrapperInstanceTarget"
signature: "public static MethodHandle wrapperInstanceTarget(Object x)"
title: "MethodHandleProxies.wrapperInstanceTarget"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandleProxies.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandleProxies.wrapperInstanceTarget

```java
public static MethodHandle wrapperInstanceTarget(Object x)
```

Produces or recovers a target method handle which is behaviorally
 equivalent to the unique method of this wrapper instance.
 The object `x` must have been produced by a call to `asInterfaceInstance asInterfaceInstance`.
 This requirement may be tested via `isWrapperInstance isWrapperInstance`.

**参数**

- **x** — any reference

**返回**

- a method handle implementing the unique method

**异常**

- **IllegalArgumentException** — if the reference x is not to a wrapper instance
