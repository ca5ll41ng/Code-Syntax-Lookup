---
id: "java-en-function-inetaddress-gethostname"
language: "java"
lang: "en"
category: "function"
name: "InetAddress.getHostName"
signature: "public String getHostName()"
title: "InetAddress.getHostName"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/InetAddress.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InetAddress.getHostName

```java
public String getHostName()
```

Gets the host name for this IP address.

 

If this InetAddress was created with a host name,
 this host name will be remembered and returned;
 otherwise, a reverse name lookup will be performed
 and the result will be returned based on the system-wide
 resolver. If a lookup of the name service
 is required, call
 `getCanonicalHostName() getCanonicalHostName`.

**返回**

- the host name for this IP address

**参见**

- InetAddress#getCanonicalHostName
