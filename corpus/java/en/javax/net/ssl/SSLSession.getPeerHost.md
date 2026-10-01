---
id: "java-en-function-sslsession-getpeerhost"
language: "java"
lang: "en"
category: "function"
name: "SSLSession.getPeerHost"
signature: "String getPeerHost()"
title: "SSLSession.getPeerHost"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSession.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSession.getPeerHost

```java
String getPeerHost()
```

Returns the host name of the peer in this session.
 

 For the server, this is the client's host;  and for
 the client, it is the server's host. The name may not be
 a fully qualified host name or even a host name at all as
 it may represent a string encoding of the peer's network address.
 If such a name is desired, it might
 be resolved through a name service based on the value returned
 by this method.
 

 This value is not authenticated and should not be relied upon.
 It is mainly used as a hint for `SSLSession` caching
 strategies.

**返回**

- the host name of the peer host, or null if no information is available.
