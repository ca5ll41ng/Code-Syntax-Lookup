---
id: "java-en-function-sslsocket-removehandshakecompletedlistener"
language: "java"
lang: "en"
category: "function"
name: "SSLSocket.removeHandshakeCompletedListener"
signature: "public abstract void removeHandshakeCompletedListener( HandshakeCompletedListener listener)"
title: "SSLSocket.removeHandshakeCompletedListener"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSocket.removeHandshakeCompletedListener

```java
public abstract void removeHandshakeCompletedListener( HandshakeCompletedListener listener)
```

Removes a previously registered handshake completion listener.

**参数**

- **listener** — the HandShake Completed event listener

**异常**

- **IllegalArgumentException** — if the listener is not registered, or the argument is null.

**参见**

- #addHandshakeCompletedListener(HandshakeCompletedListener)
