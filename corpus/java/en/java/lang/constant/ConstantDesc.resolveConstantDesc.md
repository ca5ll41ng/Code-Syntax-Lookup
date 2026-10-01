---
id: "java-en-function-constantdesc-resolveconstantdesc"
language: "java"
lang: "en"
category: "function"
name: "ConstantDesc.resolveConstantDesc"
signature: "Object resolveConstantDesc(MethodHandles.Lookup lookup) throws ReflectiveOperationException"
title: "ConstantDesc.resolveConstantDesc"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/ConstantDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantDesc.resolveConstantDesc

```java
Object resolveConstantDesc(MethodHandles.Lookup lookup) throws ReflectiveOperationException
```

Resolves this descriptor reflectively, emulating the resolution behavior
 of JVMS {@jvms 5.4.3} and the access control behavior of JVMS {@jvms 5.4.4}.  The resolution
 and access control context is provided by the `MethodHandles.Lookup`
 parameter.  No caching of the resulting value is performed.

 a value that is not representable by run-time entities. Attempts to resolve these may
 result in errors.

**参数**

- **lookup** — The `MethodHandles.Lookup` to provide name resolution and access control context

**返回**

- the resolved constant value

**异常**

- **ReflectiveOperationException** — if a class, method, or field could not be reflectively resolved in the course of resolution
- **LinkageError** — if a linkage error occurs
