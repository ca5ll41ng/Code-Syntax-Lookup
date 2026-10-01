---
id: "java-en-function-urlconnection-getconnecttimeout"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.getConnectTimeout"
signature: "public int getConnectTimeout()"
title: "URLConnection.getConnectTimeout"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.getConnectTimeout

```java
public int getConnectTimeout()
```

Returns setting for connect timeout.
 

 0 return implies that the option is disabled
 (i.e., timeout of infinity).

**返回**

- an `int` that indicates the connect timeout value in milliseconds

**参见**

- #setConnectTimeout(int)
- #connect()

> *Since 1.5*
