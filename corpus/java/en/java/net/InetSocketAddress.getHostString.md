---
id: "java-en-function-inetsocketaddress-gethoststring"
language: "java"
lang: "en"
category: "function"
name: "InetSocketAddress.getHostString"
signature: "public final String getHostString()"
title: "InetSocketAddress.getHostString"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/InetSocketAddress.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InetSocketAddress.getHostString

```java
public final String getHostString()
```

Returns the hostname, or the String form of the address if it
 doesn't have a hostname (it was created using a literal).
 This has the benefit of **not** attempting a reverse lookup.

**返回**

- the hostname, or String representation of the address.

> *Since 1.7*
