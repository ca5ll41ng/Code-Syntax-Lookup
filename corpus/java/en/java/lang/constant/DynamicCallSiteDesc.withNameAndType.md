---
id: "java-en-function-dynamiccallsitedesc-withnameandtype"
language: "java"
lang: "en"
category: "function"
name: "DynamicCallSiteDesc.withNameAndType"
signature: "public DynamicCallSiteDesc withNameAndType(String invocationName, MethodTypeDesc invocationType)"
title: "DynamicCallSiteDesc.withNameAndType"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/DynamicCallSiteDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DynamicCallSiteDesc.withNameAndType

```java
public DynamicCallSiteDesc withNameAndType(String invocationName, MethodTypeDesc invocationType)
```

Returns a nominal descriptor for an `invokedynamic` call site whose
 bootstrap and bootstrap arguments are the same as this one, but with the
 specified invocationName and invocation invocationType

**参数**

- **invocationName** — The unqualified name that would appear in the `NameAndType` operand of the `invokedynamic`
- **invocationType** — a `MethodTypeDesc` describing the invocation type that would appear in the `NameAndType` operand of the `invokedynamic`

**返回**

- the nominal descriptor

**异常**

- **NullPointerException** — if any parameter is null
- **IllegalArgumentException** — if the invocation name has the incorrect format
