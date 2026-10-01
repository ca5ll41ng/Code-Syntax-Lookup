---
id: "java-en-function-methodhandleproxies-iswrapperinstance"
language: "java"
lang: "en"
category: "function"
name: "MethodHandleProxies.isWrapperInstance"
signature: "public static boolean isWrapperInstance(Object x)"
title: "MethodHandleProxies.isWrapperInstance"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandleProxies.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandleProxies.isWrapperInstance

```java
public static boolean isWrapperInstance(Object x)
```

Determines if the given object was produced by a call to `asInterfaceInstance asInterfaceInstance`.

**参数**

- **x** — any reference

**返回**

- true if the reference is not null and points to an object produced by `asInterfaceInstance`
