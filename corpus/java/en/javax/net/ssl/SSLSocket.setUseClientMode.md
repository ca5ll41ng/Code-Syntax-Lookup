---
id: "java-en-function-sslsocket-setuseclientmode"
language: "java"
lang: "en"
category: "function"
name: "SSLSocket.setUseClientMode"
signature: "public abstract void setUseClientMode(boolean mode)"
title: "SSLSocket.setUseClientMode"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSocket.setUseClientMode

```java
public abstract void setUseClientMode(boolean mode)
```

Configures the socket to use client (or server) mode when
 handshaking.
 

 This method must be called before any handshaking occurs.
 Once handshaking has begun, the mode can not be reset for the
 life of this socket.
 

 Servers normally authenticate themselves, and clients
 are not required to do so.

**参数**

- **mode** — true if the socket should start its handshaking in "client" mode

**异常**

- **IllegalArgumentException** — if a mode change is attempted after the initial handshake has begun.

**参见**

- #getUseClientMode()
