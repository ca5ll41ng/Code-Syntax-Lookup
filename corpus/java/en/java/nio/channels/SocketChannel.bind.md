---
id: "java-en-function-socketchannel-bind"
language: "java"
lang: "en"
category: "function"
name: "SocketChannel.bind"
signature: "public abstract SocketChannel bind(SocketAddress local) throws IOException"
title: "SocketChannel.bind"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketChannel.bind

```java
public abstract SocketChannel bind(SocketAddress local) throws IOException
```

Binds the channel's socket to a local address.

 

 This method is used to establish an association between the socket
 and a local address. For Internet Protocol sockets, once an
 association is established then the socket remains bound until the
 channel is closed. If the `local` parameter has the value `null` then the socket will be bound to an address that is assigned
 automatically.

 Binding a socket channel to a Unix Domain socket creates a file
 corresponding to the file path in the `UnixDomainSocketAddress`. This
 file persists after the channel is closed, and must be removed before
 another socket can bind to the same name. If a socket channel to a Unix
 Domain socket is implicitly bound by connecting it without calling
 bind first, then its socket is
 unnamed
 with no corresponding socket file in the file-system. If a socket channel
 to a Unix Domain socket is automatically bound by calling `bind(null)` this results in an unnamed socket also.

 Each platform enforces an implementation specific maximum length for the
 name of a Unix Domain socket. This limitation is enforced when a
 channel is bound. The maximum length is typically close to and generally
 not less than 100 bytes.

**参数**

- **local** — The address to bind the socket, or `null` to bind the socket to an automatically assigned socket address

**返回**

- This channel

**异常**

- **ConnectionPendingException** — If a non-blocking connect operation is already in progress on this channel
- **AlreadyBoundException** — {@inheritDoc}
- **UnsupportedAddressTypeException** — {@inheritDoc}
- **ClosedChannelException** — {@inheritDoc}
- **IOException** — {@inheritDoc}

> *Since 1.7*
