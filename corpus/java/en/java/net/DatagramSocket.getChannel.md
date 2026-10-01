---
id: "java-en-function-datagramsocket-getchannel"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocket.getChannel"
signature: "public DatagramChannel getChannel()"
title: "DatagramSocket.getChannel"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocket.getChannel

```java
public DatagramChannel getChannel()
```

Returns the unique `java.nio.channels.DatagramChannel` object
 associated with this datagram socket, if any.

 

 A datagram socket will have a channel if, and only if, the channel
 itself was created via the `open
 DatagramChannel.open` method.

**返回**

- the datagram channel associated with this datagram socket, or `null` if this socket was not created for a channel

> *Since 1.4*
