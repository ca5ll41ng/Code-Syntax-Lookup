---
id: "java-en-function-datagramsocket-close"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocket.close"
signature: "public void close()"
title: "DatagramSocket.close"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocket.close

```java
public void close()
```

Closes this datagram socket.
 

 Any thread currently blocked in `receive` upon this socket
 will throw a `SocketException`.

 

 If this socket has an associated channel then the channel is closed
 as well.

 

 Once closed, several of the methods defined by this class will throw
 an exception if invoked on the closed socket.
