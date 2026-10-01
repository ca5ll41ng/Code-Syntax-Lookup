---
id: "java-en-function-memorylayout-equals"
language: "java"
lang: "en"
category: "function"
name: "MemoryLayout.equals"
signature: "boolean equals(Object other)"
title: "MemoryLayout.equals"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemoryLayout.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryLayout.equals

```java
boolean equals(Object other)
```

Compares the specified object with this layout for equality. Returns `true`
 if and only if the specified object is also a layout, and it is equal to this
 layout. Two layouts are considered equal if they are of the same kind, have the
 same size, name and alignment constraint. Furthermore, depending on the
 layout kind, additional conditions must be satisfied:
 
     
- two value layouts are considered equal if they have the same
     `order() order`, and
     `carrier() carrier`. Additionally, two address
     layouts are considered equal if they also have the same
     `targetLayout() target layout`;
     
- two sequence layouts are considered equal if they have the same element
     count (see `elementCount`), and if their element
     layouts (see `elementLayout`) are also equal;
     
- two group layouts are considered equal if they are of the same type
     (see `StructLayout`, `UnionLayout`) and if their member layouts
     (see `memberLayouts`) are also equal.

**参数**

- **other** — the object to be compared for equality with this layout

**返回**

- `true` if the specified object is equal to this layout
