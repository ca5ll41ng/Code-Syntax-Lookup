---
id: "java-en-function-sslsocket-addhandshakecompletedlistener"
language: "java"
lang: "en"
category: "function"
name: "SSLSocket.addHandshakeCompletedListener"
signature: "public abstract void addHandshakeCompletedListener( HandshakeCompletedListener listener)"
title: "SSLSocket.addHandshakeCompletedListener"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSocket.addHandshakeCompletedListener

```java
public abstract void addHandshakeCompletedListener( HandshakeCompletedListener listener)
```

Registers an event listener to receive notifications that an
 SSL handshake has completed on this connection.

**参数**

- **listener** — the HandShake Completed event listener

**异常**

- **IllegalArgumentException** — if the argument is null.

**参见**

- #startHandshake()
- #removeHandshakeCompletedListener(HandshakeCompletedListener)
