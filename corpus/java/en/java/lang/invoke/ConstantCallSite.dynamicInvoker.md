---
id: "java-en-function-constantcallsite-dynamicinvoker"
language: "java"
lang: "en"
category: "function"
name: "ConstantCallSite.dynamicInvoker"
signature: "public final MethodHandle dynamicInvoker()"
title: "ConstantCallSite.dynamicInvoker"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/ConstantCallSite.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantCallSite.dynamicInvoker

```java
public final MethodHandle dynamicInvoker()
```

Returns this call site's permanent target.
 Since that target will never change, this is a correct implementation
 of `dynamicInvoker CallSite.dynamicInvoker`.

**返回**

- the immutable linkage state of this call site, a constant method handle

**异常**

- **IllegalStateException** — if the `ConstantCallSite` constructor has not completed
