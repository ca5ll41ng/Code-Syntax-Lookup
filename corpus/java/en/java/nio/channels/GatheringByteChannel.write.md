---
id: "java-en-function-gatheringbytechannel-write"
language: "java"
lang: "en"
category: "function"
name: "GatheringByteChannel.write"
signature: "public long write(ByteBuffer[] srcs, int offset, int length) throws IOException"
title: "GatheringByteChannel.write"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/GatheringByteChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GatheringByteChannel.write

```java
public long write(ByteBuffer[] srcs, int offset, int length) throws IOException
```

Writes a sequence of bytes to this channel from a subsequence of the
 given buffers.

 

 An attempt is made to write up to r bytes to this channel,
 where r is the total number of bytes remaining in the specified
 subsequence of the given buffer array, that is,

 {@snippet lang=java :
     srcs[offset].remaining()
         + srcs[offset+1].remaining()
         + ... + srcs[offset+length-1].remaining()
 }

 at the moment that this method is invoked.

 

 Suppose that a byte sequence of length n is written, where
 `0`&nbsp;`<=`&nbsp;n&nbsp;`<=`&nbsp;r.
 Up to the first `srcs[offset].remaining()` bytes of this sequence
 are written from buffer `srcs[offset]`, up to the next
 `srcs[offset+1].remaining()` bytes are written from buffer
 `srcs[offset+1]`, and so forth, until the entire byte sequence is
 written.  As many bytes as possible are written from each buffer, hence
 the final position of each updated buffer, except the last updated
 buffer, is guaranteed to be equal to that buffer's limit.

 

 For many types of channels, a write operation will return only after
 writing all of the r requested bytes.  Some types of channels,
 depending upon their state, may write only some of the bytes or possibly
 none at all.  A socket channel in `isBlocking non-blocking mode`, for example, cannot
 write any more bytes than are free in the socket's output buffer.  The
 write method may need to be invoked more than once to ensure that all
 `hasRemaining remaining` bytes are written.

 

 This method may be invoked at any time.  If another thread has
 already initiated a write operation upon this channel, however, then an
 invocation of this method will block until the first operation is
 complete.

**参数**

- **srcs** — The buffers from which bytes are to be retrieved
- **offset** — The offset within the buffer array of the first buffer from which bytes are to be retrieved; must be non-negative and no larger than `srcs.length`
- **length** — The maximum number of buffers to be accessed; must be non-negative and no larger than `srcs.length`&nbsp;-&nbsp;`offset`

**返回**

- The number of bytes written, possibly zero

**异常**

- **IndexOutOfBoundsException** — If the preconditions on the `offset` and `length` parameters do not hold
- **NonWritableChannelException** — If this channel was not opened for writing
- **ClosedChannelException** — If this channel is closed
- **AsynchronousCloseException** — If another thread closes this channel while the write operation is in progress
- **ClosedByInterruptException** — If another thread interrupts the current thread while the write operation is in progress, thereby closing the channel and setting the current thread's interrupted status
- **IOException** — If some other I/O error occurs
