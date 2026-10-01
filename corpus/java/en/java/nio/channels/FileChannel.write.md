---
id: "java-en-function-filechannel-write"
language: "java"
lang: "en"
category: "function"
name: "FileChannel.write"
signature: "public abstract int write(ByteBuffer src) throws IOException"
title: "FileChannel.write"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/FileChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileChannel.write

```java
public abstract int write(ByteBuffer src) throws IOException
```

Writes a sequence of bytes to this channel from the given buffer.

 

 Bytes are written starting at this channel's current file position
 unless the channel is in append mode, in which case the position is
 first advanced to the end of the file.  The file is grown, if necessary,
 to accommodate the written bytes, and then the file position is updated
 with the number of bytes actually written.  Otherwise this method
 behaves exactly as specified by the `WritableByteChannel`
 interface.

**异常**

- **ClosedChannelException** — {@inheritDoc}
- **AsynchronousCloseException** — {@inheritDoc}
- **ClosedByInterruptException** — {@inheritDoc}
- **NonWritableChannelException** — {@inheritDoc}
