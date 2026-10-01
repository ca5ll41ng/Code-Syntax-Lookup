---
id: "java-en-function-handshakecompletedevent-getlocalprincipal"
language: "java"
lang: "en"
category: "function"
name: "HandshakeCompletedEvent.getLocalPrincipal"
signature: "public Principal getLocalPrincipal()"
title: "HandshakeCompletedEvent.getLocalPrincipal"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/HandshakeCompletedEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HandshakeCompletedEvent.getLocalPrincipal

```java
public Principal getLocalPrincipal()
```

Returns the principal that was sent to the peer during handshaking.

**返回**

- the principal sent to the peer. Returns an X500Principal of the end-entity certificate for X509-based cipher suites, and KerberosPrincipal for Kerberos cipher suites. If no principal was sent, then null is returned.

**参见**

- #getLocalCertificates()
- #getPeerPrincipal()

> *Since 1.5*
