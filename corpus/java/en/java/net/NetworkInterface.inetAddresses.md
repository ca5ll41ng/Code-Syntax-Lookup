---
id: "java-en-function-networkinterface-inetaddresses"
language: "java"
lang: "en"
category: "function"
name: "NetworkInterface.inetAddresses"
signature: "public Stream<InetAddress> inetAddresses()"
title: "NetworkInterface.inetAddresses"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/NetworkInterface.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NetworkInterface.inetAddresses

```java
public Stream<InetAddress> inetAddresses()
```

Get a Stream of the InetAddresses bound to this network interface.

 The stream contains the InetAddresses that were bound to the
 interface at the time the `getNetworkInterfaces()
 interface configuration was read`

**返回**

- a Stream object with the InetAddresses bound to this network interface

> *Since 9*
