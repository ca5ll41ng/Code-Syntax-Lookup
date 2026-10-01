---
id: "java-en-function-filelock-release"
language: "java"
lang: "en"
category: "function"
name: "FileLock.release"
signature: "public abstract void release() throws IOException"
title: "FileLock.release"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/FileLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileLock.release

```java
public abstract void release() throws IOException
```

Releases this lock.

 

 If this lock object is valid then invoking this method releases the
 lock and renders the object invalid.  If this lock object is invalid
 then invoking this method has no effect.

**异常**

- **ClosedChannelException** — If the channel that was used to acquire this lock is no longer open
- **IOException** — If an I/O error occurs
