---
id: "java-en-function-seekablebytechannel-position"
language: "java"
lang: "en"
category: "function"
name: "SeekableByteChannel.position"
signature: "long position() throws IOException"
title: "SeekableByteChannel.position"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SeekableByteChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SeekableByteChannel.position

```java
long position() throws IOException
```

Returns this channel's position.

**返回**

- This channel's position, a non-negative integer counting the number of bytes from the beginning of the entity to the current position

**异常**

- **ClosedChannelException** — If this channel is closed
- **IOException** — If some other I/O error occurs
