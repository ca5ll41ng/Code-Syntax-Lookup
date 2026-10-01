---
id: "java-en-function-memorysegment-getstring"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.getString"
signature: "String getString(long offset)"
title: "MemorySegment.getString"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.getString

```java
String getString(long offset)
```

Reads a null-terminated string from this segment at the given offset, using the
 `UTF_8 UTF-8` charset.
 

 Calling this method is equivalent to the following code:
 {@snippet lang = java:
 getString(offset, StandardCharsets.UTF_8);
}

**参数**

- **offset** — the offset in bytes (relative to this segment address) at which this access operation will occur

**返回**

- a Java string constructed from the bytes read from the given starting address up to (but not including) the first `'\0'` terminator character (assuming one is found)

**异常**

- **IllegalArgumentException** — if the size of the string is greater than the largest string supported by the platform
- **IndexOutOfBoundsException** — if `offset < 0`
- **IndexOutOfBoundsException** — if no string terminator (e.g. `'\0'`) is present in this segment between the given `offset` and the end of this segment.
- **IllegalStateException** — if the `scope() scope` associated with this segment is not `isAlive() alive`
- **WrongThreadException** — if this method is called from a thread `T`, such that `isAccessibleBy(T) == false`
