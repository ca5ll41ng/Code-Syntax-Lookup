---
id: "java-en-function-socket-gettrafficclass"
language: "java"
lang: "en"
category: "function"
name: "Socket.getTrafficClass"
signature: "public int getTrafficClass() throws SocketException"
title: "Socket.getTrafficClass"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.getTrafficClass

```java
public int getTrafficClass() throws SocketException
```

Gets traffic class or type-of-service in the IP header
 for packets sent from this Socket
 

 As the underlying network implementation may ignore the
 traffic class or type-of-service set using `setTrafficClass`
 this method may return a different value than was previously
 set using the `setTrafficClass` method on this Socket.

**返回**

- the traffic class or type-of-service already set

**异常**

- **SocketException** — if there is an error obtaining the traffic class or type-of-service value, or the socket is closed.

**参见**

- #setTrafficClass(int)
- StandardSocketOptions#IP_TOS

> *Since 1.4*
