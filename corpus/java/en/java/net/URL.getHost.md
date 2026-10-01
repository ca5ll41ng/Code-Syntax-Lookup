---
id: "java-en-function-url-gethost"
language: "java"
lang: "en"
category: "function"
name: "URL.getHost"
signature: "public String getHost()"
title: "URL.getHost"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URL.getHost

```java
public String getHost()
```

Gets the host name of this `URL`, if applicable.
 The format of the host conforms to RFC&nbsp;2732, i.e. for a
 literal IPv6 address, this method will return the IPv6 address
 enclosed in square brackets (`'['` and `']'`).

**返回**

- the host name of this `URL`.
