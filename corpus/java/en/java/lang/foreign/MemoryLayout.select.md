---
id: "java-en-function-memorylayout-select"
language: "java"
lang: "en"
category: "function"
name: "MemoryLayout.select"
signature: "MemoryLayout select(PathElement... elements)"
title: "MemoryLayout.select"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemoryLayout.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryLayout.select

```java
MemoryLayout select(PathElement... elements)
```

Returns the layout selected from the provided path, where the initial layout in
 the path is this layout.

**参数**

- **elements** — the layout path elements

**返回**

- the layout selected by the layout path in `elements`

**异常**

- **IllegalArgumentException** — if the layout path is not well-formed for this layout
- **IllegalArgumentException** — if the layout path contains one or more dereference path elements
- **IllegalArgumentException** — if the layout path contains one or more path elements that select one or more sequence element indices, such as `sequenceElement` and `sequenceElement`)
