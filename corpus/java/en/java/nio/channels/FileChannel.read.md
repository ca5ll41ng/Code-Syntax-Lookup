---
id: "java-en-function-filechannel-read"
language: "java"
lang: "en"
category: "function"
name: "FileChannel.read"
signature: "public abstract int read(ByteBuffer dst) throws IOException"
title: "FileChannel.read"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/FileChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileChannel.read

```java
public abstract int read(ByteBuffer dst) throws IOException
```

Reads a sequence of bytes from this channel into the given buffer.

 

 Bytes are read starting at this channel's current file position, and
 then the file position is updated with the number of bytes actually
 read.  Otherwise this method behaves exactly as specified in the `ReadableByteChannel` interface.

**异常**

- **ClosedChannelException** — {@inheritDoc}
- **AsynchronousCloseException** — {@inheritDoc}
- **ClosedByInterruptException** — {@inheritDoc}
- **NonReadableChannelException** — {@inheritDoc}
