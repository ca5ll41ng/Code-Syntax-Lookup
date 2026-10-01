---
id: "java-en-function-inetaddress-getlocalhost"
language: "java"
lang: "en"
category: "function"
name: "InetAddress.getLocalHost"
signature: "public static InetAddress getLocalHost() throws UnknownHostException"
title: "InetAddress.getLocalHost"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/InetAddress.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InetAddress.getLocalHost

```java
public static InetAddress getLocalHost() throws UnknownHostException
```

Returns the address of the local host. This is achieved by retrieving
 the name of the host from the system, then resolving that name into
 an `InetAddress`.

 

Note: The resolved address may be cached for a short period of time.

**返回**

- the address of the local host.

**异常**

- **UnknownHostException** — if the local host name could not be resolved into an address.

**参见**

- java.net.InetAddress#getByName(java.lang.String)
