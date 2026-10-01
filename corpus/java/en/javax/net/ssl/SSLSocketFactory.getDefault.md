---
id: "java-en-function-sslsocketfactory-getdefault"
language: "java"
lang: "en"
category: "function"
name: "SSLSocketFactory.getDefault"
signature: "public static SocketFactory getDefault()"
title: "SSLSocketFactory.getDefault"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSocketFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSocketFactory.getDefault

```java
public static SocketFactory getDefault()
```

Returns the default SSL socket factory.

 

The first time this method is called, the security property
 "ssl.SocketFactory.provider" is examined. If it is non-null, a class by
 that name is loaded and instantiated. If that is successful and the
 object is an instance of SSLSocketFactory, it is made the default SSL
 socket factory.

 

Otherwise, this method returns
 SSLContext.getDefault().getSocketFactory(). If that
 call fails, an inoperative factory is returned.

**返回**

- the default SocketFactory

**参见**

- SSLContext#getDefault
