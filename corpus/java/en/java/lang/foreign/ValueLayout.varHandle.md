---
id: "java-en-function-valuelayout-varhandle"
language: "java"
lang: "en"
category: "function"
name: "ValueLayout.varHandle"
signature: "VarHandle varHandle()"
title: "ValueLayout.varHandle"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/ValueLayout.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ValueLayout.varHandle

```java
VarHandle varHandle()
```

{@return a var handle which can be used to access values described by this value
          layout, in a given memory segment}
 

 The returned var handle's `varType() var type` is the
 `carrier() carrier type` of this value layout, and the
 list of coordinate types is `(MemorySegment, long)`, where the
 memory segment coordinate corresponds to the memory segment to be accessed, and
 the `long` coordinate corresponds to the byte offset into the accessed
 memory segment at which the access occurs.
 

 The returned var handle checks that accesses are aligned according to
 this value layout's `byteAlignment() alignment constraint`.

          `MemoryLayout#varHandle(PathElement...)` with an empty path
          element array, as it avoids the creation of the var args array.

          access mode restrictions
          common to all memory access var handles derived from memory layouts.

**参见**

- MemoryLayout#varHandle(PathElement...)
