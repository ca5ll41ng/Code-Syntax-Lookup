---
id: "java-en-function-sslserversocket-setsslparameters"
language: "java"
lang: "en"
category: "function"
name: "SSLServerSocket.setSSLParameters"
signature: "public void setSSLParameters(SSLParameters params)"
title: "SSLServerSocket.setSSLParameters"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLServerSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLServerSocket.setSSLParameters

```java
public void setSSLParameters(SSLParameters params)
```

Applies SSLParameters to newly accepted connections.

 

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

**参见**

- #getSSLParameters()

> *Since 1.7*
