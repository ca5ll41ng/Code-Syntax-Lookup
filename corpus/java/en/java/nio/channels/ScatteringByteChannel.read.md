---
id: "java-en-function-scatteringbytechannel-read"
language: "java"
lang: "en"
category: "function"
name: "ScatteringByteChannel.read"
signature: "public long read(ByteBuffer[] dsts, int offset, int length) throws IOException"
title: "ScatteringByteChannel.read"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/ScatteringByteChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ScatteringByteChannel.read

```java
public long read(ByteBuffer[] dsts, int offset, int length) throws IOException
```

Reads a sequence of bytes from this channel into a subsequence of the
 given buffers.

 

 An invocation of this method attempts to read up to r bytes
 from this channel, where r is the total number of bytes remaining
 in the specified subsequence of the given buffer array, that is,

 {@snippet lang=java :
     dsts[offset].remaining()
         + dsts[offset+1].remaining()
         + ... + dsts[offset+length-1].remaining()
 }

 at the moment that this method is invoked.

 

 Suppose that a byte sequence of length n is read, where
 `0`&nbsp;`<=`&nbsp;n&nbsp;`<=`&nbsp;r.
 Up to the first `dsts[offset].remaining()` bytes of this sequence
 are transferred into buffer `dsts[offset]`, up to the next
 `dsts[offset+1].remaining()` bytes are transferred into buffer
 `dsts[offset+1]`, and so forth, until the entire byte sequence
 is transferred into the given buffers.  As many bytes as possible are
 transferred into each buffer, hence the final position of each updated
 buffer, except the last updated buffer, is guaranteed to be equal to
 that buffer's limit.

 

 This method may be invoked at any time.  If another thread has
 already initiated a read operation upon this channel, however, then an
 invocation of this method will block until the first operation is
 complete.

**参数**

- **dsts** — The buffers into which bytes are to be transferred
- **offset** — The offset within the buffer array of the first buffer into which bytes are to be transferred; must be non-negative and no larger than `dsts.length`
- **length** — The maximum number of buffers to be accessed; must be non-negative and no larger than `dsts.length`&nbsp;-&nbsp;`offset`

**返回**

- The number of bytes read, possibly zero, or `-1` if the channel has reached end-of-stream

**异常**

- **IndexOutOfBoundsException** — If the preconditions on the `offset` and `length` parameters do not hold
- **IllegalArgumentException** — If any of the buffers is read-only
- **NonReadableChannelException** — If this channel was not opened for reading
- **ClosedChannelException** — If this channel is closed
- **AsynchronousCloseException** — If another thread closes this channel while the read operation is in progress
- **ClosedByInterruptException** — If another thread interrupts the current thread while the read operation is in progress, thereby closing the channel and setting the current thread's interrupted status
- **IOException** — If some other I/O error occurs
