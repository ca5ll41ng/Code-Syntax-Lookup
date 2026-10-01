---
id: "java-en-function-seekablebytechannel-write"
language: "java"
lang: "en"
category: "function"
name: "SeekableByteChannel.write"
signature: "int write(ByteBuffer src) throws IOException"
title: "SeekableByteChannel.write"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SeekableByteChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SeekableByteChannel.write

```java
int write(ByteBuffer src) throws IOException
```

Writes a sequence of bytes to this channel from the given buffer.

 

 Bytes are written starting at this channel's current position, unless
 the channel is connected to an entity such as a file that is opened with
 the `APPEND APPEND` option, in
 which case the position is first advanced to the end. The entity to which
 the channel is connected is grown, if necessary, to accommodate the
 written bytes, and then the position is updated with the number of bytes
 actually written. Otherwise this method behaves exactly as specified by
 the `WritableByteChannel` interface.

**异常**

- **ClosedChannelException** — {@inheritDoc}
- **AsynchronousCloseException** — {@inheritDoc}
- **ClosedByInterruptException** — {@inheritDoc}
- **NonWritableChannelException** — {@inheritDoc}
