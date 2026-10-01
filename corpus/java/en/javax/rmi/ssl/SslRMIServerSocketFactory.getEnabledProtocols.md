---
id: "java-en-function-sslrmiserversocketfactory-getenabledprotocols"
language: "java"
lang: "en"
category: "function"
name: "SslRMIServerSocketFactory.getEnabledProtocols"
signature: "public final String[] getEnabledProtocols()"
title: "SslRMIServerSocketFactory.getEnabledProtocols"
directive: "method"
module: "java.rmi/javax.rmi.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/javax/rmi/ssl/SslRMIServerSocketFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SslRMIServerSocketFactory.getEnabledProtocols

```java
public final String[] getEnabledProtocols()
```

Returns the names of the protocol versions enabled on SSL
 connections accepted by server sockets created by this factory,
 or null if this factory uses the protocol versions
 that are enabled by default.

**返回**

- an array of protocol versions enabled, or null

**参见**

- SSLSocket#setEnabledProtocols
