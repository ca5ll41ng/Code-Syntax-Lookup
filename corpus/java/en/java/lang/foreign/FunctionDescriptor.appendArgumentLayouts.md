---
id: "java-en-function-functiondescriptor-appendargumentlayouts"
language: "java"
lang: "en"
category: "function"
name: "FunctionDescriptor.appendArgumentLayouts"
signature: "FunctionDescriptor appendArgumentLayouts(MemoryLayout... addedLayouts)"
title: "FunctionDescriptor.appendArgumentLayouts"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/FunctionDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FunctionDescriptor.appendArgumentLayouts

```java
FunctionDescriptor appendArgumentLayouts(MemoryLayout... addedLayouts)
```

Returns a function descriptor with the given argument layouts appended to the
 argument layouts of this function descriptor.

**参数**

- **addedLayouts** — the argument layouts to append

**返回**

- a new function descriptor, with the provided additional argument layouts

**异常**

- **IllegalArgumentException** — if one of the layouts in `addedLayouts` is a padding layout
