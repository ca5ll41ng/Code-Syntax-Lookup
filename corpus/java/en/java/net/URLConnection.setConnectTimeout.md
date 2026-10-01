---
id: "java-en-function-urlconnection-setconnecttimeout"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.setConnectTimeout"
signature: "public void setConnectTimeout(int timeout)"
title: "URLConnection.setConnectTimeout"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.setConnectTimeout

```java
public void setConnectTimeout(int timeout)
```

Sets a specified timeout value, in milliseconds, to be used
 when opening a communications link to the resource referenced
 by this URLConnection.  If the timeout expires before the
 connection can be established, a
 java.net.SocketTimeoutException is raised. A timeout of zero is
 interpreted as an infinite timeout.

 

 Some non-standard implementation of this method may ignore
 the specified timeout. To see the connect timeout set, please
 call getConnectTimeout().

**参数**

- **timeout** — an `int` that specifies the connect timeout value in milliseconds

**异常**

- **IllegalArgumentException** — if the timeout parameter is negative

**参见**

- #getConnectTimeout()
- #connect()

> *Since 1.5*
