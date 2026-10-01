---
id: "java-en-function-selectorprovider-inheritedchannel"
language: "java"
lang: "en"
category: "function"
name: "SelectorProvider.inheritedChannel"
signature: "public Channel inheritedChannel() throws IOException"
title: "SelectorProvider.inheritedChannel"
directive: "method"
module: "java.base/java.nio.channels.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/spi/SelectorProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SelectorProvider.inheritedChannel

```java
public Channel inheritedChannel() throws IOException
```

Returns the channel inherited from the entity that created this
 Java virtual machine.

 

 On many operating systems a process, such as a Java virtual
 machine, can be started in a manner that allows the process to
 inherit a channel from the entity that created the process. The
 manner in which this is done is system dependent, as are the
 possible entities to which the channel may be connected. For example,
 on UNIX systems, the Internet services daemon (inetd) is used to
 start programs to service requests when a request arrives on an
 associated network port. In this example, the process that is started,
 inherits a channel representing a network socket.

 

 In cases where the inherited channel is for an Internet protocol
 socket then the `Channel Channel` type returned
 by this method is determined as follows:

 

  
- 

 If the inherited channel is for a stream-oriented connected
  socket then a `SocketChannel SocketChannel` is returned. The
  socket channel is, at least initially, in blocking mode, bound
  to a socket address, and connected to a peer.
  

  
- 

 If the inherited channel is for a stream-oriented listening
  socket then a `ServerSocketChannel ServerSocketChannel` is returned.
  The server-socket channel is, at least initially, in blocking mode,
  and bound to a socket address.
  

  
- 

 If the inherited channel is a datagram-oriented socket then a
  `DatagramChannel DatagramChannel` is returned. The datagram channel
  is, at least initially, in blocking mode, and bound to a socket address.
  

 

 

 In cases where the inherited channel is for a Unix domain
 socket then the `Channel` type returned is the same as for
 Internet protocol sockets as described above, except that
 datagram-oriented sockets are not supported.

 

 In addition to the two types of socket just described, this method
 may return other types in the future.

 

 The first invocation of this method creates the channel that is
 returned. Subsequent invocations of this method return the same
 channel. 

 `null`.

**返回**

- The inherited channel, if any, otherwise `null`.

**异常**

- **IOException** — If an I/O error occurs

> *Since 1.5*
