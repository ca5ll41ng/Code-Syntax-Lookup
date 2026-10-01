---
id: "java-en-function-methodtypedesc-resolveconstantdesc"
language: "java"
lang: "en"
category: "function"
name: "MethodTypeDesc.resolveConstantDesc"
signature: "MethodType resolveConstantDesc(MethodHandles.Lookup lookup) throws ReflectiveOperationException"
title: "MethodTypeDesc.resolveConstantDesc"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/MethodTypeDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodTypeDesc.resolveConstantDesc

```java
MethodType resolveConstantDesc(MethodHandles.Lookup lookup) throws ReflectiveOperationException
```

{@inheritDoc}

 that are not representable by `MethodType`, such as methods with
 more than 255 parameter slots, so attempts to resolve these may result in errors.

> *Since 21*
