---
id: "java-en-function-sslrmiserversocketfactory-getenabledciphersuites"
language: "java"
lang: "en"
category: "function"
name: "SslRMIServerSocketFactory.getEnabledCipherSuites"
signature: "public final String[] getEnabledCipherSuites()"
title: "SslRMIServerSocketFactory.getEnabledCipherSuites"
directive: "method"
module: "java.rmi/javax.rmi.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/javax/rmi/ssl/SslRMIServerSocketFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SslRMIServerSocketFactory.getEnabledCipherSuites

```java
public final String[] getEnabledCipherSuites()
```

Returns the names of the cipher suites enabled on SSL
 connections accepted by server sockets created by this factory,
 or null if this factory uses the cipher suites
 that are enabled by default.

**返回**

- an array of cipher suites enabled, or null

**参见**

- SSLSocket#setEnabledCipherSuites
