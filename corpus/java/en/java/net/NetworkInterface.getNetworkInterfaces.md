---
id: "java-en-function-networkinterface-getnetworkinterfaces"
language: "java"
lang: "en"
category: "function"
name: "NetworkInterface.getNetworkInterfaces"
signature: "public static Enumeration<NetworkInterface> getNetworkInterfaces() throws SocketException"
title: "NetworkInterface.getNetworkInterfaces"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/NetworkInterface.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NetworkInterface.getNetworkInterfaces

```java
public static Enumeration<NetworkInterface> getNetworkInterfaces() throws SocketException
```

Returns an `Enumeration` of all the interfaces on this machine. The
 `Enumeration` contains at least one element, possibly representing
 a loopback interface that only supports communication between entities on
 this machine.

 This method can be used in combination with
 `getInetAddresses` to obtain all IP addresses for this node.
 

 The returned interface instances may reflect a snapshot of the
 configuration taken at the time the instance is created.
 See the general discussion of `#lookup
 snapshots and configuration` for the semantics of the returned interface.

**返回**

- an Enumeration of NetworkInterfaces found on this machine

**异常**

- **SocketException** — if an I/O error occurs, or if the platform does not have at least one configured network interface.

**参见**

- #networkInterfaces()
