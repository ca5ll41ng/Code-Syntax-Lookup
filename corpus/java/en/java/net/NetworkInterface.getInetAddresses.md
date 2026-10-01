---
id: "java-en-function-networkinterface-getinetaddresses"
language: "java"
lang: "en"
category: "function"
name: "NetworkInterface.getInetAddresses"
signature: "public Enumeration<InetAddress> getInetAddresses()"
title: "NetworkInterface.getInetAddresses"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/NetworkInterface.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NetworkInterface.getInetAddresses

```java
public Enumeration<InetAddress> getInetAddresses()
```

Get an Enumeration of the InetAddresses bound to this network interface.

 The returned enumeration contains the InetAddresses that were bound to
 the interface at the time the `getNetworkInterfaces()
 interface configuration was read`

**返回**

- an Enumeration object with the InetAddresses bound to this network interface

**参见**

- #inetAddresses()
