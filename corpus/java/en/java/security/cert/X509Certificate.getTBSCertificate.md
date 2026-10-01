---
id: "java-en-function-x509certificate-gettbscertificate"
language: "java"
lang: "en"
category: "function"
name: "X509Certificate.getTBSCertificate"
signature: "public abstract byte[] getTBSCertificate() throws CertificateEncodingException"
title: "X509Certificate.getTBSCertificate"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509Certificate.getTBSCertificate

```java
public abstract byte[] getTBSCertificate() throws CertificateEncodingException
```

Gets the DER-encoded certificate information, the
 `tbsCertificate` from this certificate.
 This can be used to verify the signature independently.

**返回**

- the DER-encoded certificate information.

**异常**

- **CertificateEncodingException** — if an encoding error occurs.
