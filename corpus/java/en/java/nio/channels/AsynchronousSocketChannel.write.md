---
id: "java-en-function-asynchronoussocketchannel-write"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousSocketChannel.write"
signature: "public abstract <A> void write(ByteBuffer src, long timeout, TimeUnit unit, A attachment, CompletionHandler<Integer,? super A> handler)"
title: "AsynchronousSocketChannel.write"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousSocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousSocketChannel.write

```java
public abstract <A> void write(ByteBuffer src, long timeout, TimeUnit unit, A attachment, CompletionHandler<Integer,? super A> handler)
```

Writes a sequence of bytes to this channel from the given buffer.

 

 This method initiates an asynchronous write operation to write a
 sequence of bytes to this channel from the given buffer. The `handler` parameter is a completion handler that is invoked when the write
 operation completes (or fails). The result passed to the completion
 handler is the number of bytes written.

 

 If a timeout is specified and the timeout elapses before the operation
 completes then it completes with the exception `InterruptedByTimeoutException`. Where a timeout occurs, and the
 implementation cannot guarantee that bytes have not been written, or will
 not be written to the channel from the given buffer, then further attempts
 to write to the channel will cause an unspecific runtime exception to be
 thrown.

 

 Otherwise this method works in the same manner as the `write`
 method.

**参数**

- **The** — type of the attachment
- **src** — The buffer from which bytes are to be retrieved
- **timeout** — The maximum time for the I/O operation to complete
- **unit** — The time unit of the `timeout` argument
- **attachment** — The object to attach to the I/O operation; can be `null`
- **handler** — The handler for consuming the result

**异常**

- **IllegalArgumentException** — If the buffer is a view of a `MemorySegment` allocated from a `ofConfined() thread-confined arena`
- **WritePendingException** — If a write operation is already in progress on this channel
- **NotYetConnectedException** — If this channel is not yet connected
- **ShutdownChannelGroupException** — If the channel group has terminated
