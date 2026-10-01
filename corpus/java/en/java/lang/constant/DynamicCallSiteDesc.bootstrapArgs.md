---
id: "java-en-function-dynamiccallsitedesc-bootstrapargs"
language: "java"
lang: "en"
category: "function"
name: "DynamicCallSiteDesc.bootstrapArgs"
signature: "public ConstantDesc[] bootstrapArgs()"
title: "DynamicCallSiteDesc.bootstrapArgs"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/DynamicCallSiteDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DynamicCallSiteDesc.bootstrapArgs

```java
public ConstantDesc[] bootstrapArgs()
```

Returns `ConstantDesc`s describing the bootstrap arguments for the
 `invokedynamic`. The returned array is always non-null. A zero
 length array is returned if this `DynamicCallSiteDesc` has no
 bootstrap arguments.

**返回**

- the bootstrap arguments for the `invokedynamic`
