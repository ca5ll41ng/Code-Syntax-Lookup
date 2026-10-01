---
id: "java-en-function-dynamiccallsitedesc-withargs"
language: "java"
lang: "en"
category: "function"
name: "DynamicCallSiteDesc.withArgs"
signature: "public DynamicCallSiteDesc withArgs(ConstantDesc... bootstrapArgs)"
title: "DynamicCallSiteDesc.withArgs"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/DynamicCallSiteDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DynamicCallSiteDesc.withArgs

```java
public DynamicCallSiteDesc withArgs(ConstantDesc... bootstrapArgs)
```

Returns a nominal descriptor for an `invokedynamic` call site whose
 bootstrap method, name, and invocation type are the same as this one, but
 with the specified bootstrap arguments.

**参数**

- **bootstrapArgs** — `ConstantDesc`s describing the static arguments to the bootstrap, that would appear in the `BootstrapMethods` attribute

**返回**

- the nominal descriptor

**异常**

- **NullPointerException** — if the argument or its contents are `null`
