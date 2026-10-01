---
id: "java-en-function-sslsocket-starthandshake"
language: "java"
lang: "en"
category: "function"
name: "SSLSocket.startHandshake"
signature: "public abstract void startHandshake() throws IOException"
title: "SSLSocket.startHandshake"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSocket.startHandshake

```java
public abstract void startHandshake() throws IOException
```

Starts handshaking on this `SSLSocket`.
 

 Common reasons include a need to initiate a new protected session,
 create new encryption keys, or to change cipher suites. To force
 complete reauthentication, the current session should be invalidated
 before starting this handshake.
 

 The behavior of this method is protocol (and possibly implementation)
 dependent. For example, in TLSv1.3 calling this method after the
 connection has been established will force a key update. For prior TLS
 versions it will force a renegotiation (re-handshake).
 

 If data has already been sent on the connection, it continues
 to flow during this handshake.  When the handshake completes, this
 will be signaled with an event.
 

 This method is synchronous for the initial handshake on a connection
 and returns when the negotiated handshake is complete. Some
 protocols may not support multiple handshakes on an existing socket
 and may throw an `IOException`.

**异常**

- **IOException** — on a network level error

**参见**

- #addHandshakeCompletedListener(HandshakeCompletedListener)
