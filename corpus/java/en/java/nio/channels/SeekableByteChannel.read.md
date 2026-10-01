---
id: "java-en-function-seekablebytechannel-read"
language: "java"
lang: "en"
category: "function"
name: "SeekableByteChannel.read"
signature: "int read(ByteBuffer dst) throws IOException"
title: "SeekableByteChannel.read"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SeekableByteChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SeekableByteChannel.read

```java
int read(ByteBuffer dst) throws IOException
```

Reads a sequence of bytes from this channel into the given buffer.

 

 Bytes are read starting at this channel's current position, and
 then the position is updated with the number of bytes actually read.
 Otherwise this method behaves exactly as specified in the `ReadableByteChannel` interface.

**异常**

- **ClosedChannelException** — {@inheritDoc}
- **AsynchronousCloseException** — {@inheritDoc}
- **ClosedByInterruptException** — {@inheritDoc}
- **NonReadableChannelException** — {@inheritDoc}
