---
id: "java-en-function-inet6address-gethostaddress"
language: "java"
lang: "en"
category: "function"
name: "Inet6Address.getHostAddress"
signature: "public String getHostAddress()"
title: "Inet6Address.getHostAddress"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Inet6Address.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Inet6Address.getHostAddress

```java
public String getHostAddress()
```

Returns the IP address string in textual presentation. If the instance
 was created specifying a scope identifier then the scope id is appended
 to the IP address preceded by a "%" (per-cent) character. This can be
 either a numeric value or a string, depending on which was used to create
 the instance.

**返回**

- the raw IP address in a string format.
