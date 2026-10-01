---
id: "java-en-function-functiondescriptor-insertargumentlayouts"
language: "java"
lang: "en"
category: "function"
name: "FunctionDescriptor.insertArgumentLayouts"
signature: "FunctionDescriptor insertArgumentLayouts(int index, MemoryLayout... addedLayouts)"
title: "FunctionDescriptor.insertArgumentLayouts"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/FunctionDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FunctionDescriptor.insertArgumentLayouts

```java
FunctionDescriptor insertArgumentLayouts(int index, MemoryLayout... addedLayouts)
```

Returns a function descriptor with the given argument layouts inserted at the
 given index, into the argument layout array of this function descriptor.

**参数**

- **index** — the index at which to insert the arguments
- **addedLayouts** — the argument layouts to insert at given index

**返回**

- a new function descriptor, with the provided additional argument layouts

**异常**

- **IllegalArgumentException** — if one of the layouts in `addedLayouts` is a padding layout
- **IllegalArgumentException** — if `index < 0 || index > argumentLayouts().size()`
