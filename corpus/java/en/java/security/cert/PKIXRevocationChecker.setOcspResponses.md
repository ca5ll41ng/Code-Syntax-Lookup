---
id: "java-en-function-pkixrevocationchecker-setocspresponses"
language: "java"
lang: "en"
category: "function"
name: "PKIXRevocationChecker.setOcspResponses"
signature: "public void setOcspResponses(Map<X509Certificate, byte[]> responses)"
title: "PKIXRevocationChecker.setOcspResponses"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXRevocationChecker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXRevocationChecker.setOcspResponses

```java
public void setOcspResponses(Map<X509Certificate, byte[]> responses)
```

Sets the OCSP responses. These responses are used to determine
 the revocation status of the specified certificates when OCSP is used.

**参数**

- **responses** — a map of OCSP responses. Each key is an `X509Certificate` that maps to the corresponding DER-encoded OCSP response for that certificate. A deep copy of the map is performed to protect against subsequent modification.
