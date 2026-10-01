---
id: "java-en-function-functiondescriptor-ofvoid"
language: "java"
lang: "en"
category: "function"
name: "FunctionDescriptor.ofVoid"
signature: "static FunctionDescriptor ofVoid(MemoryLayout... argLayouts)"
title: "FunctionDescriptor.ofVoid"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/FunctionDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FunctionDescriptor.ofVoid

```java
static FunctionDescriptor ofVoid(MemoryLayout... argLayouts)
```

Creates a function descriptor with the given argument layouts and no return
 layout. This is useful to model functions that return no values.

**参数**

- **argLayouts** — the argument layouts

**返回**

- a new function descriptor with the provided argument layouts

**异常**

- **IllegalArgumentException** — if one of the layouts in `argLayouts` is a padding layout
