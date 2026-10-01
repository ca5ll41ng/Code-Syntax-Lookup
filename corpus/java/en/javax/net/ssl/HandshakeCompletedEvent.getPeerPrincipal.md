---
id: "java-en-function-handshakecompletedevent-getpeerprincipal"
language: "java"
lang: "en"
category: "function"
name: "HandshakeCompletedEvent.getPeerPrincipal"
signature: "public Principal getPeerPrincipal() throws SSLPeerUnverifiedException"
title: "HandshakeCompletedEvent.getPeerPrincipal"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/HandshakeCompletedEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HandshakeCompletedEvent.getPeerPrincipal

```java
public Principal getPeerPrincipal() throws SSLPeerUnverifiedException
```

Returns the identity of the peer which was established as part of
 defining the session.

**返回**

- the peer's principal. Returns an X500Principal of the end-entity certificate for X509-based cipher suites, and KerberosPrincipal for Kerberos cipher suites.

**异常**

- **SSLPeerUnverifiedException** — if the peer's identity has not been verified

**参见**

- #getPeerCertificates()
- #getLocalPrincipal()

> *Since 1.5*
