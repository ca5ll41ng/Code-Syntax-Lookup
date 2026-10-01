---
id: "java-en-function-urlstreamhandler-gethostaddress"
language: "java"
lang: "en"
category: "function"
name: "URLStreamHandler.getHostAddress"
signature: "protected InetAddress getHostAddress(URL u)"
title: "URLStreamHandler.getHostAddress"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLStreamHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLStreamHandler.getHostAddress

```java
protected InetAddress getHostAddress(URL u)
```

Get the IP address of our host. An empty host field or a DNS failure
 will result in a null return.

**参数**

- **u** — a URL object

**返回**

- an `InetAddress` representing the host IP address.

> *Since 1.3*
