---
id: "java-en-function-asynchronoussocketchannel-read"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousSocketChannel.read"
signature: "public abstract <A> void read(ByteBuffer dst, long timeout, TimeUnit unit, A attachment, CompletionHandler<Integer,? super A> handler)"
title: "AsynchronousSocketChannel.read"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousSocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousSocketChannel.read

```java
public abstract <A> void read(ByteBuffer dst, long timeout, TimeUnit unit, A attachment, CompletionHandler<Integer,? super A> handler)
```

Reads a sequence of bytes from this channel into the given buffer.

 

 This method initiates an asynchronous read operation to read a
 sequence of bytes from this channel into the given buffer. The `handler` parameter is a completion handler that is invoked when the read
 operation completes (or fails). The result passed to the completion
 handler is the number of bytes read or `-1` if no bytes could be
 read because the channel has reached end-of-stream.

 

 If a timeout is specified and the timeout elapses before the operation
 completes then the operation completes with the exception `InterruptedByTimeoutException`. Where a timeout occurs, and the
 implementation cannot guarantee that bytes have not been read, or will not
 be read from the channel into the given buffer, then further attempts to
 read from the channel will cause an unspecific runtime exception to be
 thrown.

 

 Otherwise this method works in the same manner as the `read`
 method.

**参数**

- **The** — type of the attachment
- **dst** — The buffer into which bytes are to be transferred
- **timeout** — The maximum time for the I/O operation to complete
- **unit** — The time unit of the `timeout` argument
- **attachment** — The object to attach to the I/O operation; can be `null`
- **handler** — The handler for consuming the result

**异常**

- **IllegalArgumentException** — If the buffer is read-only or a view of a `MemorySegment` allocated from a `ofConfined() thread-confined arena`
- **ReadPendingException** — If a read operation is already in progress on this channel
- **NotYetConnectedException** — If this channel is not yet connected
- **ShutdownChannelGroupException** — If the channel group has terminated
