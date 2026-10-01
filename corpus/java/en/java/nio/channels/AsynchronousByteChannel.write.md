---
id: "java-en-function-asynchronousbytechannel-write"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousByteChannel.write"
signature: "<A> void write(ByteBuffer src, A attachment, CompletionHandler<Integer,? super A> handler)"
title: "AsynchronousByteChannel.write"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousByteChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousByteChannel.write

```java
<A> void write(ByteBuffer src, A attachment, CompletionHandler<Integer,? super A> handler)
```

Writes a sequence of bytes to this channel from the given buffer.

 

 This method initiates an asynchronous write operation to write a
 sequence of bytes to this channel from the given buffer. The `handler` parameter is a completion handler that is invoked when the write
 operation completes (or fails). The result passed to the completion
 handler is the number of bytes written.

 

 The write operation may write up to r bytes to the channel,
 where r is the number of bytes remaining in the buffer, that is,
 `src.remaining()` at the time that the write is attempted. Where
 r is 0, the write operation completes immediately with a result of
 `0` without initiating an I/O operation.

 

 Suppose that a byte sequence of length n is written, where
 `0`&nbsp;`<`&nbsp;n&nbsp;`<=`&nbsp;r.
 This byte sequence will be transferred from the buffer starting at index
 p, where p is the buffer's position at the moment the
 write is performed; the index of the last byte written will be
 p&nbsp;`+`&nbsp;n&nbsp;`-`&nbsp;`1`.
 Upon completion the buffer's position will be equal to
 p&nbsp;`+`&nbsp;n; its limit will not have changed.

 

 Buffers are not safe for use by multiple concurrent threads so care
 should be taken to not access the buffer until the operation has
 completed.

 

 This method may be invoked at any time. Some channel types may not
 allow more than one write to be outstanding at any given time. If a thread
 initiates a write operation before a previous write operation has
 completed then a `WritePendingException` will be thrown.

**参数**

- **The** — type of the attachment
- **src** — The buffer from which bytes are to be retrieved
- **attachment** — The object to attach to the I/O operation; can be `null`
- **handler** — The completion handler object

**异常**

- **IllegalArgumentException** — If the buffer is a view of a `MemorySegment` allocated from a `ofConfined() thread-confined arena`
- **WritePendingException** — If the channel does not allow more than one write to be outstanding and a previous write has not completed
- **ShutdownChannelGroupException** — If the channel is associated with a `AsynchronousChannelGroup group` that has terminated
