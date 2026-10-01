---
id: "java-en-function-networkinterface-gethardwareaddress"
language: "java"
lang: "en"
category: "function"
name: "NetworkInterface.getHardwareAddress"
signature: "public byte[] getHardwareAddress() throws SocketException"
title: "NetworkInterface.getHardwareAddress"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/NetworkInterface.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NetworkInterface.getHardwareAddress

```java
public byte[] getHardwareAddress() throws SocketException
```

Returns the hardware address (usually MAC) of the interface if it
 has one and if it can be accessed given the current privileges.

**返回**

- a byte array containing the address, or `null` if the address doesn't exist or is not accessible

**异常**

- **SocketException** — if an I/O error occurs.

> *Since 1.6*
