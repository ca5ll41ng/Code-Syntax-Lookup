---
id: "java-en-function-readablebytechannel-read"
language: "java"
lang: "en"
category: "function"
name: "ReadableByteChannel.read"
signature: "public int read(ByteBuffer dst) throws IOException"
title: "ReadableByteChannel.read"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/ReadableByteChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReadableByteChannel.read

```java
public int read(ByteBuffer dst) throws IOException
```

Reads a sequence of bytes from this channel into the given buffer.

 

 An attempt is made to read up to r bytes from the channel,
 where r is the number of bytes remaining in the buffer, that is,
 `dst.remaining()`, at the moment this method is invoked.

 

 Suppose that a byte sequence of length n is read, where
 `0`&nbsp;`<=`&nbsp;n&nbsp;`<=`&nbsp;r.
 This byte sequence will be transferred into the buffer so that the first
 byte in the sequence is at index p and the last byte is at index
 p&nbsp;`+`&nbsp;n&nbsp;`-`&nbsp;`1`,
 where p is the buffer's position at the moment this method is
 invoked.  Upon return the buffer's position will be equal to
 p&nbsp;`+`&nbsp;n; its limit will not have changed.

 

 A read operation might not fill the buffer, and in fact it might not
 read any bytes at all.  Whether or not it does so depends upon the
 nature and state of the channel.  A socket channel in non-blocking mode,
 for example, cannot read any more bytes than are immediately available
 from the socket's input buffer; similarly, a file channel cannot read
 any more bytes than remain in the file.  It is guaranteed, however, that
 if a channel is in blocking mode and there is at least one byte
 remaining in the buffer then this method will block until at least one
 byte is read.

 

 This method may be invoked at any time.  If another thread has
 already initiated a read operation upon this channel, however, then an
 invocation of this method will block until the first operation is
 complete.

**参数**

- **dst** — The buffer into which bytes are to be transferred

**返回**

- The number of bytes read, possibly zero, or `-1` if the channel has reached end-of-stream

**异常**

- **IllegalArgumentException** — If the buffer is read-only
- **NonReadableChannelException** — If this channel was not opened for reading
- **ClosedChannelException** — If this channel is closed
- **AsynchronousCloseException** — If another thread closes this channel while the read operation is in progress
- **ClosedByInterruptException** — If another thread interrupts the current thread while the read operation is in progress, thereby closing the channel and setting the current thread's interrupted status
- **IOException** — If some other I/O error occurs
