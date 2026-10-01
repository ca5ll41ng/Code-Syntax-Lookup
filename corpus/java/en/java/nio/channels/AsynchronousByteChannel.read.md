---
id: "java-en-function-asynchronousbytechannel-read"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousByteChannel.read"
signature: "<A> void read(ByteBuffer dst, A attachment, CompletionHandler<Integer,? super A> handler)"
title: "AsynchronousByteChannel.read"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousByteChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousByteChannel.read

```java
<A> void read(ByteBuffer dst, A attachment, CompletionHandler<Integer,? super A> handler)
```

Reads a sequence of bytes from this channel into the given buffer.

 

 This method initiates an asynchronous read operation to read a
 sequence of bytes from this channel into the given buffer. The `handler` parameter is a completion handler that is invoked when the read
 operation completes (or fails). The result passed to the completion
 handler is the number of bytes read or `-1` if no bytes could be
 read because the channel has reached end-of-stream.

 

 The read operation may read up to r bytes from the channel,
 where r is the number of bytes remaining in the buffer, that is,
 `dst.remaining()` at the time that the read is attempted. Where
 r is 0, the read operation completes immediately with a result of
 `0` without initiating an I/O operation.

 

 Suppose that a byte sequence of length n is read, where
 `0`&nbsp;`<`&nbsp;n&nbsp;`<=`&nbsp;r.
 This byte sequence will be transferred into the buffer so that the first
 byte in the sequence is at index p and the last byte is at index
 p&nbsp;`+`&nbsp;n&nbsp;`-`&nbsp;`1`,
 where p is the buffer's position at the moment the read is
 performed. Upon completion the buffer's position will be equal to
 p&nbsp;`+`&nbsp;n; its limit will not have changed.

 

 Buffers are not safe for use by multiple concurrent threads so care
 should be taken to not access the buffer until the operation has
 completed.

 

 This method may be invoked at any time. Some channel types may not
 allow more than one read to be outstanding at any given time. If a thread
 initiates a read operation before a previous read operation has
 completed then a `ReadPendingException` will be thrown.

**参数**

- **The** — type of the attachment
- **dst** — The buffer into which bytes are to be transferred
- **attachment** — The object to attach to the I/O operation; can be `null`
- **handler** — The completion handler

**异常**

- **IllegalArgumentException** — If the buffer is read-only or a view of a `MemorySegment` allocated from a `ofConfined() thread-confined arena`
- **ReadPendingException** — If the channel does not allow more than one read to be outstanding and a previous read has not completed
- **ShutdownChannelGroupException** — If the channel is associated with a `AsynchronousChannelGroup group` that has terminated
