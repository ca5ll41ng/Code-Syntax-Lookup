---
id: "java-en-function-datagramsocket-setbroadcast"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocket.setBroadcast"
signature: "public void setBroadcast(boolean on) throws SocketException"
title: "DatagramSocket.setBroadcast"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocket.setBroadcast

```java
public void setBroadcast(boolean on) throws SocketException
```

Enable/disable SO_BROADCAST.

 

 Some operating systems may require that the Java virtual machine be
 started with implementation specific privileges to enable this option or
 send broadcast datagrams.

 This method is equivalent to calling `setOption(SocketOption, Object)
 setOption`.

**参数**

- **on** — whether or not to have broadcast turned on.

**异常**

- **SocketException** — if there is an error in the underlying protocol, such as an UDP error, or the socket is closed.

**参见**

- #getBroadcast()
- StandardSocketOptions#SO_BROADCAST

> *Since 1.4*
