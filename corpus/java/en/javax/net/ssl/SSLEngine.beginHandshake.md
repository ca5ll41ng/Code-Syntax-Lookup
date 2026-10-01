---
id: "java-en-function-sslengine-beginhandshake"
language: "java"
lang: "en"
category: "function"
name: "SSLEngine.beginHandshake"
signature: "public abstract void beginHandshake() throws SSLException"
title: "SSLEngine.beginHandshake"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLEngine.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLEngine.beginHandshake

```java
public abstract void beginHandshake() throws SSLException
```

Begins handshaking on this `SSLEngine`.
 

 Common reasons include a need to initiate a new protected session,
 create new encryption keys, or to change cipher suites. To force
 complete reauthentication, the current session should be invalidated
 before starting this handshake.
 

 The behavior of this method is protocol (and possibly implementation)
 dependent. For example, in TLSv1.3 calling this method after the
 connection has been established will force a key update. For prior TLS
 versions it will force a renegotiation (re-handshake).
 

 This method is not needed for the initial handshake, as the
 `wrap()` and `unwrap()` methods will
 implicitly call this method if handshaking has not already begun.
 

 Note that the peer may also request a session renegotiation with
 this `SSLEngine` by sending the appropriate
 session renegotiate handshake message.
 

 Unlike the `startHandshake()
 SSLSocket#startHandshake` method, this method does not block
 until handshaking is completed.
 

 Some protocols may not support multiple handshakes on an existing
 engine and may throw an `SSLException`.

**异常**

- **SSLException** — if a problem was encountered while signaling the `SSLEngine` to begin a new handshake. See the class description for more information on engine closure.
- **IllegalStateException** — if the client/server mode has not yet been set.

**参见**

- SSLSession#invalidate()
