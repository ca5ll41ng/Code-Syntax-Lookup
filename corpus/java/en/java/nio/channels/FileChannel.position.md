---
id: "java-en-function-filechannel-position"
language: "java"
lang: "en"
category: "function"
name: "FileChannel.position"
signature: "public abstract long position() throws IOException"
title: "FileChannel.position"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/FileChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileChannel.position

```java
public abstract long position() throws IOException
```

Returns this channel's file position.

**返回**

- This channel's file position, a non-negative integer counting the number of bytes from the beginning of the file to the current position

**异常**

- **ClosedChannelException** — If this channel is closed
- **IOException** — If some other I/O error occurs
