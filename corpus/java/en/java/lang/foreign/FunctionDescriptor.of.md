---
id: "java-en-function-functiondescriptor-of"
language: "java"
lang: "en"
category: "function"
name: "FunctionDescriptor.of"
signature: "static FunctionDescriptor of(MemoryLayout resLayout, MemoryLayout... argLayouts)"
title: "FunctionDescriptor.of"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/FunctionDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FunctionDescriptor.of

```java
static FunctionDescriptor of(MemoryLayout resLayout, MemoryLayout... argLayouts)
```

Creates a function descriptor with the given return and argument layouts.

**参数**

- **resLayout** — the return layout
- **argLayouts** — the argument layouts

**返回**

- a new function descriptor with the provided return and argument layouts

**异常**

- **IllegalArgumentException** — if `resLayout` is a padding layout
- **IllegalArgumentException** — if one of the layouts in `argLayouts` is a padding layout
