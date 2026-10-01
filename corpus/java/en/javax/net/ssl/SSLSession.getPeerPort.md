---
id: "java-en-function-sslsession-getpeerport"
language: "java"
lang: "en"
category: "function"
name: "SSLSession.getPeerPort"
signature: "int getPeerPort()"
title: "SSLSession.getPeerPort"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSession.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSession.getPeerPort

```java
int getPeerPort()
```

Returns the port number of the peer in this session.
 

 For the server, this is the client's port number;  and for
 the client, it is the server's port number.
 

 This value is not authenticated and should not be relied upon.
 It is mainly used as a hint for `SSLSession` caching
 strategies.

**返回**

- the port number of the peer host, or -1 if no information is available.

> *Since 1.5*
