---
id: "java-en-function-linker-canonicallayouts"
language: "java"
lang: "en"
category: "function"
name: "Linker.canonicalLayouts"
signature: "Map<String, MemoryLayout> canonicalLayouts()"
title: "Linker.canonicalLayouts"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/Linker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Linker.canonicalLayouts

```java
Map<String, MemoryLayout> canonicalLayouts()
```

{@return an unmodifiable mapping between the names of data types used by the ABI
          implemented by this linker and their canonical layouts}
 

 Each `Linker` is responsible for choosing the data types that are widely
 recognized as useful on the OS and processor combination supported by the
 `Linker`. Accordingly, the precise set of data type names and canonical
 layouts exposed by the linker are unspecified; they vary from one `Linker`
 to another.

           exposes a set of symbols that is stable over time. Clients of
           `canonicalLayouts` are likely to fail if a data type that was
           previously exposed by the linker is no longer exposed, or if its
           canonical layout is updated.
           

If an implementer provides `Linker` implementations for multiple
           OS and processor combinations, then it is strongly recommended that the
           result of `canonicalLayouts` exposes, as much as possible,
           a consistent set of symbols across all the OS and processor combinations.
