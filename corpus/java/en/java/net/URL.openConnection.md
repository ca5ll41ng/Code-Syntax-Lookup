---
id: "java-en-function-url-openconnection"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["urlconnection-ssrf"],"cwe":["CWE-918"],"params":[0,1]}
name: "URL.openConnection"
signature: "public URLConnection openConnection() throws java.io.IOException"
title: "URL.openConnection"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URL.openConnection

```java
public URLConnection openConnection() throws java.io.IOException
```

Returns a `java.net.URLConnection URLConnection` instance that
 represents a connection to the remote object referred to by the
 `URL`.

 

A new instance of `java.net.URLConnection URLConnection` is
 created every time when invoking the
 `openConnection(URL)
 URLStreamHandler.openConnection` method of the protocol handler for
 this URL.

 

It should be noted that a URLConnection instance does not establish
 the actual network connection on creation. This will happen only when
 calling `connect`.

 

If for the URL's protocol (such as HTTP or JAR), there
 exists a public, specialized URLConnection subclass belonging
 to one of the following packages or one of their subpackages:
 java.lang, java.io, java.util, java.net, the connection
 returned will be of that subclass. For example, for HTTP an
 HttpURLConnection will be returned, and for JAR a
 JarURLConnection will be returned.

**返回**

- a `java.net.URLConnection URLConnection` linking to the URL.

**异常**

- **IOException** — if an I/O exception occurs.

**参见**

- java.net.URL#URL(java.lang.String, java.lang.String, int, java.lang.String)
