---
id: "java-en-function-sslrmiserversocketfactory-getneedclientauth"
language: "java"
lang: "en"
category: "function"
name: "SslRMIServerSocketFactory.getNeedClientAuth"
signature: "public final boolean getNeedClientAuth()"
title: "SslRMIServerSocketFactory.getNeedClientAuth"
directive: "method"
module: "java.rmi/javax.rmi.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/javax/rmi/ssl/SslRMIServerSocketFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SslRMIServerSocketFactory.getNeedClientAuth

```java
public final boolean getNeedClientAuth()
```

Returns true if client authentication is
 required on SSL connections accepted by server sockets created
 by this factory.

**返回**

- true if client authentication is required

**参见**

- SSLSocket#setNeedClientAuth
