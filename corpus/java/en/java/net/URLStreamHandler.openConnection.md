---
id: "java-en-function-urlstreamhandler-openconnection"
language: "java"
lang: "en"
category: "function"
name: "URLStreamHandler.openConnection"
signature: "protected abstract URLConnection openConnection(URL u) throws IOException"
title: "URLStreamHandler.openConnection"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLStreamHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLStreamHandler.openConnection

```java
protected abstract URLConnection openConnection(URL u) throws IOException
```

Opens a connection to the object referenced by the
 `URL` argument.
 This method should be overridden by a subclass.

 

If for the handler's protocol (such as HTTP or JAR), there
 exists a public, specialized URLConnection subclass belonging
 to one of the following packages or one of their subpackages:
 java.lang, java.io, java.util, java.net, the connection
 returned will be of that subclass. For example, for HTTP an
 HttpURLConnection will be returned, and for JAR a
 JarURLConnection will be returned.

**参数**

- **u** — the URL that this connects to.

**返回**

- a `URLConnection` object for the `URL`.

**异常**

- **IOException** — if an I/O error occurs while opening the connection.
