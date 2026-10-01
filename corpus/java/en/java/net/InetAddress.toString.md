---
id: "java-en-function-inetaddress-tostring"
language: "java"
lang: "en"
category: "function"
name: "InetAddress.toString"
signature: "public String toString()"
title: "InetAddress.toString"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/InetAddress.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InetAddress.toString

```java
public String toString()
```

Converts this IP address to a `String`. The
 string returned is of the form: hostname / literal IP
 address.

 If the host name is unresolved, no reverse lookup
 is performed. The hostname part will be represented
 by an empty string.

**返回**

- a string representation of this IP address.
