---
id: "java-en-function-urlconnection-setreadtimeout"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.setReadTimeout"
signature: "public void setReadTimeout(int timeout)"
title: "URLConnection.setReadTimeout"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.setReadTimeout

```java
public void setReadTimeout(int timeout)
```

Sets the read timeout to a specified timeout, in
 milliseconds. A non-zero value specifies the timeout when
 reading from Input stream when a connection is established to a
 resource. If the timeout expires before there is data available
 for read, a java.net.SocketTimeoutException is raised. A
 timeout of zero is interpreted as an infinite timeout.

 

 Some non-standard implementation of this method ignores the
 specified timeout. To see the read timeout set, please call
 getReadTimeout().

**参数**

- **timeout** — an `int` that specifies the timeout value to be used in milliseconds

**异常**

- **IllegalArgumentException** — if the timeout parameter is negative

**参见**

- #getReadTimeout()
- InputStream#read()

> *Since 1.5*
