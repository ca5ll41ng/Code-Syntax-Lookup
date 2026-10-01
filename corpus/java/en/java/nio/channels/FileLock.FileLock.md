---
id: "java-en-function-filelock-filelock"
language: "java"
lang: "en"
category: "function"
name: "FileLock.FileLock"
signature: "protected FileLock(FileChannel channel, long position, long size, boolean shared)"
title: "FileLock.FileLock"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/FileLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileLock.FileLock

```java
protected FileLock(FileChannel channel, long position, long size, boolean shared)
```

Initializes a new instance of this class.

**参数**

- **channel** — The file channel upon whose file this lock is held
- **position** — The position within the file at which the locked region starts; must be non-negative
- **size** — The size of the locked region; must be non-negative, and the sum `position`&nbsp;+&nbsp;`size` must be non-negative
- **shared** — `true` if this lock is shared, `false` if it is exclusive

**异常**

- **IllegalArgumentException** — If the preconditions on the parameters do not hold
