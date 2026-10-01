---
id: "java-en-function-filelock-overlaps"
language: "java"
lang: "en"
category: "function"
name: "FileLock.overlaps"
signature: "public final boolean overlaps(long position, long size)"
title: "FileLock.overlaps"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/FileLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileLock.overlaps

```java
public final boolean overlaps(long position, long size)
```

Tells whether or not this lock overlaps the given lock range.

**参数**

- **position** — The starting position of the lock range
- **size** — The size of the lock range

**返回**

- `true` if this lock and the given lock range overlap by at least one byte; `false` if `size` is negative or the lock range does not overlap this lock
