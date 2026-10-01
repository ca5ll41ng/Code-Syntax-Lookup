---
id: "java-en-function-sslsocket-setsslparameters"
language: "java"
lang: "en"
category: "function"
name: "SSLSocket.setSSLParameters"
signature: "public void setSSLParameters(SSLParameters params)"
title: "SSLSocket.setSSLParameters"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSocket.setSSLParameters

```java
public void setSSLParameters(SSLParameters params)
```

Applies SSLParameters to this socket.

 

This means:
 
 
- If `params.getCipherSuites()` is non-null,
   `setEnabledCipherSuites()` is called with that value.
 
- If `params.getProtocols()` is non-null,
   `setEnabledProtocols()` is called with that value.
 
- If `params.getNeedClientAuth()` or
   `params.getWantClientAuth()` return `true`,
   `setNeedClientAuth(true)` and
   `setWantClientAuth(true)` are called, respectively;
   otherwise `setWantClientAuth(false)` is called.
 
- If `params.getServerNames()` is non-null, the socket will
   configure its server names with that value.
 
- If `params.getSNIMatchers()` is non-null, the socket will
   configure its SNI matchers with that value.

**参数**

- **params** — the parameters

**异常**

- **IllegalArgumentException** — if the setEnabledCipherSuites() or the setEnabledProtocols() call fails

> *Since 1.6*
