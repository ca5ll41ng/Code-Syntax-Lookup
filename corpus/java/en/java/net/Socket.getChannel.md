---
id: "java-en-function-socket-getchannel"
language: "java"
lang: "en"
category: "function"
name: "Socket.getChannel"
signature: "public SocketChannel getChannel()"
title: "Socket.getChannel"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.getChannel

```java
public SocketChannel getChannel()
```

Returns the unique `java.nio.channels.SocketChannel SocketChannel`
 object associated with this socket, if any.

 

 A socket will have a channel if, and only if, the channel itself was
 created via the `open
 SocketChannel.open` or `accept ServerSocketChannel.accept`
 methods.

**返回**

- the socket channel associated with this socket, or `null` if this socket was not created for a channel

> *Since 1.4*
