---
id: "java-en-function-asynchronousserversocketchannel-accept"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousServerSocketChannel.accept"
signature: "public abstract <A> void accept(A attachment, CompletionHandler<AsynchronousSocketChannel,? super A> handler)"
title: "AsynchronousServerSocketChannel.accept"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousServerSocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousServerSocketChannel.accept

```java
public abstract <A> void accept(A attachment, CompletionHandler<AsynchronousSocketChannel,? super A> handler)
```

Accepts a connection.

 

 This method initiates an asynchronous operation to accept a
 connection made to this channel's socket. The `handler` parameter is
 a completion handler that is invoked when a connection is accepted (or
 the operation fails). The result passed to the completion handler is
 the `AsynchronousSocketChannel` to the new connection.

 

 When a new connection is accepted then the resulting `AsynchronousSocketChannel` will be bound to the same `AsynchronousChannelGroup` as this channel. If the group is `isShutdown shutdown` and a connection is accepted,
 then the connection is closed, and the operation completes with an `IOException` and cause `ShutdownChannelGroupException`.

 

 To allow for concurrent handling of new connections, the completion
 handler is not invoked directly by the initiating thread when a new
 connection is accepted immediately (see Threading).

**参数**

- **The** — type of the attachment
- **attachment** — The object to attach to the I/O operation; can be `null`
- **handler** — The handler for consuming the result

**异常**

- **AcceptPendingException** — If an accept operation is already in progress on this channel
- **NotYetBoundException** — If this channel's socket has not yet been bound
- **ShutdownChannelGroupException** — If the channel group has terminated
