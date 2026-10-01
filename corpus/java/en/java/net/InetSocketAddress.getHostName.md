---
id: "java-en-function-inetsocketaddress-gethostname"
language: "java"
lang: "en"
category: "function"
name: "InetSocketAddress.getHostName"
signature: "public final String getHostName()"
title: "InetSocketAddress.getHostName"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/InetSocketAddress.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InetSocketAddress.getHostName

```java
public final String getHostName()
```

Gets the `hostname`.
 Note: This method may trigger a name service reverse lookup if the
 address was created with a literal IP address.

**返回**

- the hostname part of the address.
