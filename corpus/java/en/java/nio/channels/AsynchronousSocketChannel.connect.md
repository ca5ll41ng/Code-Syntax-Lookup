---
id: "java-en-function-asynchronoussocketchannel-connect"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousSocketChannel.connect"
signature: "public abstract <A> void connect(SocketAddress remote, A attachment, CompletionHandler<Void,? super A> handler)"
title: "AsynchronousSocketChannel.connect"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousSocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousSocketChannel.connect

```java
public abstract <A> void connect(SocketAddress remote, A attachment, CompletionHandler<Void,? super A> handler)
```

Connects this channel.

 

 This method initiates an operation to connect this channel. The
 `handler` parameter is a completion handler that is invoked when
 the connection is successfully established or connection cannot be
 established. If the connection cannot be established then the channel is
 closed.

**参数**

- **The** — type of the attachment
- **remote** — The remote address to which this channel is to be connected
- **attachment** — The object to attach to the I/O operation; can be `null`
- **handler** — The handler for consuming the result

**异常**

- **UnresolvedAddressException** — If the given remote address is not fully resolved
- **UnsupportedAddressTypeException** — If the type of the given remote address is not supported
- **AlreadyConnectedException** — If this channel is already connected
- **ConnectionPendingException** — If a connection operation is already in progress on this channel
- **ShutdownChannelGroupException** — If the channel group has terminated

**参见**

- #getRemoteAddress
