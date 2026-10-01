---
id: "java-en-function-memorysegment-setstring"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.setString"
signature: "void setString(long offset, String str)"
title: "MemorySegment.setString"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.setString

```java
void setString(long offset, String str)
```

Writes the given string into this segment at the given offset, converting it to
 a null-terminated byte sequence using the `UTF_8 UTF-8`
 charset.
 

 Calling this method is equivalent to the following code:
 {@snippet lang = java:
 setString(offset, str, StandardCharsets.UTF_8);
}

**参数**

- **offset** — the offset in bytes (relative to this segment address) at which this access operation will occur, the final address of this write operation can be expressed as `address() + offset`.
- **str** — the Java string to be written into this segment

**异常**

- **IndexOutOfBoundsException** — if `offset < 0`
- **IndexOutOfBoundsException** — if `offset > byteSize() - (B + 1)`, where `B` is the size, in bytes, of the string encoded using UTF-8 charset `str.getBytes(StandardCharsets.UTF_8).length`)
- **IllegalStateException** — if the `scope() scope` associated with this segment is not `isAlive() alive`
- **WrongThreadException** — if this method is called from a thread `T`, such that `isAccessibleBy(T) == false`
- **IllegalArgumentException** — if this segment is `isReadOnly() read-only`
