---
id: "java-en-function-constantcallsite-gettarget"
language: "java"
lang: "en"
category: "function"
name: "ConstantCallSite.getTarget"
signature: "@Override public final MethodHandle getTarget()"
title: "ConstantCallSite.getTarget"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/ConstantCallSite.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantCallSite.getTarget

```java
@Override public final MethodHandle getTarget()
```

Returns the target method of the call site, which behaves
 like a `final` field of the `ConstantCallSite`.
 That is, the target is always the original value passed
 to the constructor call which created this instance.

**返回**

- the immutable linkage state of this call site, a constant method handle

**异常**

- **IllegalStateException** — if the `ConstantCallSite` constructor has not completed
