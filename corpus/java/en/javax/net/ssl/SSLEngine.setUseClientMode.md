---
id: "java-en-function-sslengine-setuseclientmode"
language: "java"
lang: "en"
category: "function"
name: "SSLEngine.setUseClientMode"
signature: "public abstract void setUseClientMode(boolean mode)"
title: "SSLEngine.setUseClientMode"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLEngine.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLEngine.setUseClientMode

```java
public abstract void setUseClientMode(boolean mode)
```

Configures the engine to use client (or server) mode when
 handshaking.
 

 This method must be called before any handshaking occurs.
 Once handshaking has begun, the mode can not be reset for the
 life of this engine.
 

 Servers normally authenticate themselves, and clients
 are not required to do so.

 The JDK SunJSSE provider implementation default for this mode is false.

**参数**

- **mode** — true if the engine should start its handshaking in "client" mode

**异常**

- **IllegalArgumentException** — if a mode change is attempted after the initial handshake has begun.

**参见**

- #getUseClientMode()
