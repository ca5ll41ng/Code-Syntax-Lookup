---
id: "java-en-function-sslengine-getuseclientmode"
language: "java"
lang: "en"
category: "function"
name: "SSLEngine.getUseClientMode"
signature: "public abstract boolean getUseClientMode()"
title: "SSLEngine.getUseClientMode"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLEngine.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLEngine.getUseClientMode

```java
public abstract boolean getUseClientMode()
```

Returns true if the engine is set to use client mode when
 handshaking.

 The JDK SunJSSE provider implementation returns false unless
 `setUseClientMode` is used to change the mode to true.

**返回**

- true if the engine should do handshaking in "client" mode

**参见**

- #setUseClientMode(boolean)
