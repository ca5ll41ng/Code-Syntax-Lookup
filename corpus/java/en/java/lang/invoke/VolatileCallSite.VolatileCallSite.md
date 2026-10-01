---
id: "java-en-function-volatilecallsite-volatilecallsite"
language: "java"
lang: "en"
category: "function"
name: "VolatileCallSite.VolatileCallSite"
signature: "public VolatileCallSite(MethodType type)"
title: "VolatileCallSite.VolatileCallSite"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/VolatileCallSite.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# VolatileCallSite.VolatileCallSite

```java
public VolatileCallSite(MethodType type)
```

Creates a call site with a volatile binding to its target.
 The initial target is set to a method handle
 of the given type which will throw an `IllegalStateException` if called.

**参数**

- **type** — the method type that this call site will have

**异常**

- **NullPointerException** — if the proposed type is null
