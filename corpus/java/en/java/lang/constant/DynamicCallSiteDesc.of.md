---
id: "java-en-function-dynamiccallsitedesc-of"
language: "java"
lang: "en"
category: "function"
name: "DynamicCallSiteDesc.of"
signature: "public static DynamicCallSiteDesc of(DirectMethodHandleDesc bootstrapMethod, String invocationName, MethodTypeDesc invocationType, ConstantDesc... bootstrapArgs)"
title: "DynamicCallSiteDesc.of"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/DynamicCallSiteDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DynamicCallSiteDesc.of

```java
public static DynamicCallSiteDesc of(DirectMethodHandleDesc bootstrapMethod, String invocationName, MethodTypeDesc invocationType, ConstantDesc... bootstrapArgs)
```

Creates a nominal descriptor for an `invokedynamic` call site.

**参数**

- **bootstrapMethod** — a `DirectMethodHandleDesc` describing the bootstrap method for the `invokedynamic`
- **invocationName** — The unqualified name that would appear in the `NameAndType` operand of the `invokedynamic`
- **invocationType** — a `MethodTypeDesc` describing the invocation type that would appear in the `NameAndType` operand of the `invokedynamic`
- **bootstrapArgs** — `ConstantDesc`s describing the static arguments to the bootstrap, that would appear in the `BootstrapMethods` attribute

**返回**

- the nominal descriptor

**异常**

- **NullPointerException** — if any parameter or its contents are `null`
- **IllegalArgumentException** — if the invocation name has the incorrect format
