---
id: "java-en-function-functiondescriptor-changereturnlayout"
language: "java"
lang: "en"
category: "function"
name: "FunctionDescriptor.changeReturnLayout"
signature: "FunctionDescriptor changeReturnLayout(MemoryLayout newReturn)"
title: "FunctionDescriptor.changeReturnLayout"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/FunctionDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FunctionDescriptor.changeReturnLayout

```java
FunctionDescriptor changeReturnLayout(MemoryLayout newReturn)
```

Returns a function descriptor with the provided return layout.

**参数**

- **newReturn** — the new return layout

**返回**

- a new function descriptor, with the provided return layout

**异常**

- **IllegalArgumentException** — if `newReturn` is a padding layout
