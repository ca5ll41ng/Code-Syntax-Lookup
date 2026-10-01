---
id: "java-en-function-httpsurlconnection-getpeerprincipal"
language: "java"
lang: "en"
category: "function"
name: "HttpsURLConnection.getPeerPrincipal"
signature: "public Principal getPeerPrincipal() throws SSLPeerUnverifiedException"
title: "HttpsURLConnection.getPeerPrincipal"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/HttpsURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpsURLConnection.getPeerPrincipal

```java
public Principal getPeerPrincipal() throws SSLPeerUnverifiedException
```

Returns the server's principal which was established as part of
 defining the session.
 

 Note: Subclasses should override this method. If not overridden, it
 will default to returning the X500Principal of the server's end-entity
 certificate for certificate-based ciphersuites, or throw an
 SSLPeerUnverifiedException for non-certificate based ciphersuites,
 such as Kerberos.

**返回**

- the server's principal. Returns an X500Principal of the end-entity certificate for X509-based cipher suites, and KerberosPrincipal for Kerberos cipher suites.

**异常**

- **SSLPeerUnverifiedException** — if the peer was not verified
- **IllegalStateException** — if this method is called before the connection has been established.

**参见**

- #getServerCertificates()
- #getLocalPrincipal()

> *Since 1.5*
