---
id: "java-en-function-networkchannel-bind"
language: "java"
lang: "en"
category: "function"
name: "NetworkChannel.bind"
signature: "NetworkChannel bind(SocketAddress local) throws IOException"
title: "NetworkChannel.bind"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/NetworkChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NetworkChannel.bind

```java
NetworkChannel bind(SocketAddress local) throws IOException
```

Binds the channel's socket to a local address.

 

 This method is used to establish an association between the socket and
 a local address. Once an association is established then the socket remains
 bound until the channel is closed. If the `local` parameter has the
 value `null` then the socket will be bound to an address that is
 assigned automatically.

**参数**

- **local** — The address to bind the socket, or `null` to bind the socket to an automatically assigned socket address

**返回**

- This channel

**异常**

- **AlreadyBoundException** — If the socket is already bound
- **UnsupportedAddressTypeException** — If the type of the given address is not supported
- **ClosedChannelException** — If the channel is closed
- **IOException** — If some other I/O error occurs

**参见**

- #getLocalAddress
