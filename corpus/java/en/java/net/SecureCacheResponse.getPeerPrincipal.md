---
id: "java-en-function-securecacheresponse-getpeerprincipal"
language: "java"
lang: "en"
category: "function"
name: "SecureCacheResponse.getPeerPrincipal"
signature: "public abstract Principal getPeerPrincipal() throws SSLPeerUnverifiedException"
title: "SecureCacheResponse.getPeerPrincipal"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SecureCacheResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureCacheResponse.getPeerPrincipal

```java
public abstract Principal getPeerPrincipal() throws SSLPeerUnverifiedException
```

Returns the server's principal which was established as part of
 defining the session during the original connection that
 retrieved the network resource.

**返回**

- the server's principal. Returns an X500Principal of the end-entity certificate for X509-based cipher suites, and KerberosPrincipal for Kerberos cipher suites.

**异常**

- **SSLPeerUnverifiedException** — if the peer was not verified.

**参见**

- #getServerCertificateChain()
- #getLocalPrincipal()
