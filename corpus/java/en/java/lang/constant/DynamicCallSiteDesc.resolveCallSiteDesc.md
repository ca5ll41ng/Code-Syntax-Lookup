---
id: "java-en-function-dynamiccallsitedesc-resolvecallsitedesc"
language: "java"
lang: "en"
category: "function"
name: "DynamicCallSiteDesc.resolveCallSiteDesc"
signature: "public CallSite resolveCallSiteDesc(MethodHandles.Lookup lookup) throws Throwable"
title: "DynamicCallSiteDesc.resolveCallSiteDesc"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/DynamicCallSiteDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DynamicCallSiteDesc.resolveCallSiteDesc

```java
public CallSite resolveCallSiteDesc(MethodHandles.Lookup lookup) throws Throwable
```

Reflectively invokes the bootstrap method with the specified arguments,
 and return the resulting `CallSite`

**参数**

- **lookup** — The `MethodHandles.Lookup` used to resolve class names

**返回**

- the `CallSite`

**异常**

- **Throwable** — if any exception is thrown by the bootstrap method
