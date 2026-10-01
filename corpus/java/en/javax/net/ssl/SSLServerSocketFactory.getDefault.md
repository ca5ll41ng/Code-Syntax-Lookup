---
id: "java-en-function-sslserversocketfactory-getdefault"
language: "java"
lang: "en"
category: "function"
name: "SSLServerSocketFactory.getDefault"
signature: "public static ServerSocketFactory getDefault()"
title: "SSLServerSocketFactory.getDefault"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLServerSocketFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLServerSocketFactory.getDefault

```java
public static ServerSocketFactory getDefault()
```

Returns the default SSL server socket factory.

 

The first time this method is called, the security property
 "ssl.ServerSocketFactory.provider" is examined. If it is non-null, a
 class by that name is loaded and instantiated. If that is successful and
 the object is an instance of SSLServerSocketFactory, it is made the
 default SSL server socket factory.

 

Otherwise, this method returns
 SSLContext.getDefault().getServerSocketFactory(). If that
 call fails, an inoperative factory is returned.

**返回**

- the default ServerSocketFactory

**参见**

- SSLContext#getDefault
