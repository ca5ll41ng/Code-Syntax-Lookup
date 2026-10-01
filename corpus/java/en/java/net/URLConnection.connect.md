---
id: "java-en-function-urlconnection-connect"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.connect"
signature: "public abstract void connect() throws IOException"
title: "URLConnection.connect"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.connect

```java
public abstract void connect() throws IOException
```

Opens a communications link to the resource referenced by this
 URL, if such a connection has not already been established.
 

 If the `connect` method is called when the connection
 has already been opened (indicated by the `connected`
 field having the value `true`), the call is ignored.
 

 URLConnection objects go through two phases: first they are
 created, then they are connected.  After being created, and
 before being connected, various options can be specified
 (e.g., doInput and UseCaches).  After connecting, it is an
 error to try to set them.  Operations that depend on being
 connected, like getContentLength, will implicitly perform the
 connection, if necessary.

**异常**

- **SocketTimeoutException** — if the timeout expires before the connection can be established
- **IOException** — if an I/O error occurs while opening the connection.

**参见**

- java.net.URLConnection#connected
- #getConnectTimeout()
- #setConnectTimeout(int)
