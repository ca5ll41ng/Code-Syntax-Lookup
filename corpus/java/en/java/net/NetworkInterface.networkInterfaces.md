---
id: "java-en-function-networkinterface-networkinterfaces"
language: "java"
lang: "en"
category: "function"
name: "NetworkInterface.networkInterfaces"
signature: "public static Stream<NetworkInterface> networkInterfaces() throws SocketException"
title: "NetworkInterface.networkInterfaces"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/NetworkInterface.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NetworkInterface.networkInterfaces

```java
public static Stream<NetworkInterface> networkInterfaces() throws SocketException
```

Returns a `Stream` of all the interfaces on this machine.  The
 `Stream` contains at least one interface, possibly representing a
 loopback interface that only supports communication between entities on
 this machine.

 `inetAddresses` to obtain a stream of all IP addresses for
 this node, for example:
 
```
 `Stream addrs = NetworkInterface.networkInterfaces()
     .flatMap(NetworkInterface::inetAddresses);
 `
```

 

 The returned interface instances may reflect a snapshot of the
 configuration taken at the time the instance is created.
 See the general discussion of `#lookup
 snapshots and configuration` for the semantics of the returned interface.

**返回**

- a Stream of NetworkInterfaces found on this machine

**异常**

- **SocketException** — if an I/O error occurs, or if the platform does not have at least one configured network interface.

> *Since 9*
