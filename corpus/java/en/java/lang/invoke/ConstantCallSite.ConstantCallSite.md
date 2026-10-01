---
id: "java-en-function-constantcallsite-constantcallsite"
language: "java"
lang: "en"
category: "function"
name: "ConstantCallSite.ConstantCallSite"
signature: "public ConstantCallSite(MethodHandle target)"
title: "ConstantCallSite.ConstantCallSite"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/ConstantCallSite.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantCallSite.ConstantCallSite

```java
public ConstantCallSite(MethodHandle target)
```

Creates a call site with a permanent target.

**参数**

- **target** — the target to be permanently associated with this call site

**异常**

- **NullPointerException** — if the proposed target is null
