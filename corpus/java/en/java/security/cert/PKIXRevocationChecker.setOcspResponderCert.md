---
id: "java-en-function-pkixrevocationchecker-setocsprespondercert"
language: "java"
lang: "en"
category: "function"
name: "PKIXRevocationChecker.setOcspResponderCert"
signature: "public void setOcspResponderCert(X509Certificate cert)"
title: "PKIXRevocationChecker.setOcspResponderCert"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXRevocationChecker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXRevocationChecker.setOcspResponderCert

```java
public void setOcspResponderCert(X509Certificate cert)
```

Sets the OCSP responder's certificate. This overrides the
 `ocsp.responderCertSubjectName`,
 `ocsp.responderCertIssuerName`,
 and `ocsp.responderCertSerialNumber` security properties.

**参数**

- **cert** — the responder's certificate
