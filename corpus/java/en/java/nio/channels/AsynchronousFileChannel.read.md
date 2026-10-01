---
id: "java-en-function-asynchronousfilechannel-read"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousFileChannel.read"
signature: "public abstract <A> void read(ByteBuffer dst, long position, A attachment, CompletionHandler<Integer,? super A> handler)"
title: "AsynchronousFileChannel.read"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousFileChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousFileChannel.read

```java
public abstract <A> void read(ByteBuffer dst, long position, A attachment, CompletionHandler<Integer,? super A> handler)
```

Reads a sequence of bytes from this channel into the given buffer,
 starting at the given file position.

 

 This method initiates the reading of a sequence of bytes from this
 channel into the given buffer, starting at the given file position. The
 result of the read is the number of bytes read or `-1` if the given
 position is greater than or equal to the file's size at the time that the
 read is attempted.

 

 This method works in the same manner as the `read`
 method, except that bytes are read starting at the given file position.
 If the given file position is greater than the file's size at the time
 that the read is attempted then no bytes are read.

**参数**

- **The** — type of the attachment
- **dst** — The buffer into which bytes are to be transferred
- **position** — The file position at which the transfer is to begin; must be non-negative
- **attachment** — The object to attach to the I/O operation; can be `null`
- **handler** — The handler for consuming the result

**异常**

- **IllegalArgumentException** — If the position is negative, or the buffer is read-only or a view of a `MemorySegment` allocated from a `ofConfined() thread-confined arena`
- **NonReadableChannelException** — If this channel was not opened for reading
