---
id: "java-en-function-memorysegment-toarray"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.toArray"
signature: "byte[] toArray(ValueLayout.OfByte elementLayout)"
title: "MemorySegment.toArray"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.toArray

```java
byte[] toArray(ValueLayout.OfByte elementLayout)
```

Copy the contents of this memory segment into a new byte array.

**参数**

- **elementLayout** — the source element layout. If the byte order associated with the layout is different from the `nativeOrder native order`, a byte swap operation will be performed on each array element

**返回**

- a new byte array whose contents are copied from this memory segment

**异常**

- **IllegalStateException** — if the `scope() scope` associated with this segment is not `isAlive() alive`
- **WrongThreadException** — if this method is called from a thread `T`, such that `isAccessibleBy(T) == false`
- **IllegalStateException** — if this segment's contents cannot be copied into a `byte[]` instance, e.g. its size is greater than `MAX_VALUE`
