---
id: "java-en-function-securecacheresponse-getservercertificatechain"
language: "java"
lang: "en"
category: "function"
name: "SecureCacheResponse.getServerCertificateChain"
signature: "public abstract List<Certificate> getServerCertificateChain() throws SSLPeerUnverifiedException"
title: "SecureCacheResponse.getServerCertificateChain"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SecureCacheResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureCacheResponse.getServerCertificateChain

```java
public abstract List<Certificate> getServerCertificateChain() throws SSLPeerUnverifiedException
```

Returns the server's certificate chain, which was established as
 part of defining the session in the original connection that
 retrieved the network resource, from cache.  Note: This method
 can be used only when using certificate-based cipher suites;
 using it with non-certificate-based cipher suites, such as
 Kerberos, will throw an SSLPeerUnverifiedException.

**返回**

- an immutable List of Certificate representing the server's certificate chain.

**异常**

- **SSLPeerUnverifiedException** — if the peer is not verified.

**参见**

- #getPeerPrincipal()
