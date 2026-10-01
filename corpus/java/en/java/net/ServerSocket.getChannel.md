---
id: "java-en-function-serversocket-getchannel"
language: "java"
lang: "en"
category: "function"
name: "ServerSocket.getChannel"
signature: "public ServerSocketChannel getChannel()"
title: "ServerSocket.getChannel"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/ServerSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServerSocket.getChannel

```java
public ServerSocketChannel getChannel()
```

Returns the unique `java.nio.channels.ServerSocketChannel` object
 associated with this socket, if any.

 

 A server socket will have a channel if, and only if, the channel
 itself was created via the `open ServerSocketChannel.open`
 method.

**返回**

- the server-socket channel associated with this socket, or `null` if this socket was not created for a channel

> *Since 1.4*
