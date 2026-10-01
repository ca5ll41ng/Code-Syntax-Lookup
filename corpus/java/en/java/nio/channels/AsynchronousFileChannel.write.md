---
id: "java-en-function-asynchronousfilechannel-write"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousFileChannel.write"
signature: "public abstract <A> void write(ByteBuffer src, long position, A attachment, CompletionHandler<Integer,? super A> handler)"
title: "AsynchronousFileChannel.write"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousFileChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousFileChannel.write

```java
public abstract <A> void write(ByteBuffer src, long position, A attachment, CompletionHandler<Integer,? super A> handler)
```

Writes a sequence of bytes to this channel from the given buffer, starting
 at the given file position.

 

 This method works in the same manner as the `write`
 method, except that bytes are written starting at the given file position.
 If the given position is greater than the file's size, at the time that
 the write is attempted, then the file will be grown to accommodate the new
 bytes; the values of any bytes between the previous end-of-file and the
 newly-written bytes are unspecified.

**参数**

- **The** — type of the attachment
- **src** — The buffer from which bytes are to be transferred
- **position** — The file position at which the transfer is to begin; must be non-negative
- **attachment** — The object to attach to the I/O operation; can be `null`
- **handler** — The handler for consuming the result

**异常**

- **IllegalArgumentException** — If the position is negative or the buffer is a view of a `MemorySegment` allocated from a `ofConfined() thread-confined arena`
- **NonWritableChannelException** — If this channel was not opened for writing
