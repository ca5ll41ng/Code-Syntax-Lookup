---
id: "java-en-function-writablebytechannel-write"
language: "java"
lang: "en"
category: "function"
name: "WritableByteChannel.write"
signature: "public int write(ByteBuffer src) throws IOException"
title: "WritableByteChannel.write"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/WritableByteChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WritableByteChannel.write

```java
public int write(ByteBuffer src) throws IOException
```

Writes a sequence of bytes to this channel from the given buffer.

 

 An attempt is made to write up to r bytes to the channel,
 where r is the number of bytes remaining in the buffer, that is,
 `src.remaining()`, at the moment this method is invoked.

 

 Suppose that a byte sequence of length n is written, where
 `0`&nbsp;`<=`&nbsp;n&nbsp;`<=`&nbsp;r.
 This byte sequence will be transferred from the buffer starting at index
 p, where p is the buffer's position at the moment this
 method is invoked; the index of the last byte written will be
 p&nbsp;`+`&nbsp;n&nbsp;`-`&nbsp;`1`.
 Upon return the buffer's position will be equal to
 p&nbsp;`+`&nbsp;n; its limit will not have changed.

 

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

- **src** — The buffer from which bytes are to be retrieved

**返回**

- The number of bytes written, possibly zero

**异常**

- **NonWritableChannelException** — If this channel was not opened for writing
- **ClosedChannelException** — If this channel is closed
- **AsynchronousCloseException** — If another thread closes this channel while the write operation is in progress
- **ClosedByInterruptException** — If another thread interrupts the current thread while the write operation is in progress, thereby closing the channel and setting the current thread's interrupted status
- **IOException** — If some other I/O error occurs
