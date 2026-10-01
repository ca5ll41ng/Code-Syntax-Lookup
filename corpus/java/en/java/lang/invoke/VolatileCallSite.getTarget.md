---
id: "java-en-function-volatilecallsite-gettarget"
language: "java"
lang: "en"
category: "function"
name: "VolatileCallSite.getTarget"
signature: "@Override public final MethodHandle getTarget()"
title: "VolatileCallSite.getTarget"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/VolatileCallSite.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# VolatileCallSite.getTarget

```java
@Override public final MethodHandle getTarget()
```

Returns the target method of the call site, which behaves
 like a `volatile` field of the `VolatileCallSite`.
 

 The interactions of `getTarget` with memory are the same
 as of a read from a `volatile` field.
 

 In particular, the current thread is required to issue a fresh
 read of the target from memory, and must not fail to see
 a recent update to the target by another thread.

**返回**

- the linkage state of this call site, a method handle which can change over time

**参见**

- #setTarget
