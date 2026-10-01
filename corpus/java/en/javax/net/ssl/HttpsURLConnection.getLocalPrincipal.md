---
id: "java-en-function-httpsurlconnection-getlocalprincipal"
language: "java"
lang: "en"
category: "function"
name: "HttpsURLConnection.getLocalPrincipal"
signature: "public Principal getLocalPrincipal()"
title: "HttpsURLConnection.getLocalPrincipal"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/HttpsURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpsURLConnection.getLocalPrincipal

```java
public Principal getLocalPrincipal()
```

Returns the principal that was sent to the server during handshaking.
 

 Note: Subclasses should override this method. If not overridden, it
 will default to returning the X500Principal of the end-entity certificate
 that was sent to the server for certificate-based ciphersuites or,
 return null for non-certificate based ciphersuites, such as Kerberos.

**返回**

- the principal sent to the server. Returns an X500Principal of the end-entity certificate for X509-based cipher suites, and KerberosPrincipal for Kerberos cipher suites. If no principal was sent, then null is returned.

**异常**

- **IllegalStateException** — if this method is called before the connection has been established.

**参见**

- #getLocalCertificates()
- #getPeerPrincipal()

> *Since 1.5*
