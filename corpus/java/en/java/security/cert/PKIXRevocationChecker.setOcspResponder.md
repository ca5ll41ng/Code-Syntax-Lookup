---
id: "java-en-function-pkixrevocationchecker-setocspresponder"
language: "java"
lang: "en"
category: "function"
name: "PKIXRevocationChecker.setOcspResponder"
signature: "public void setOcspResponder(URI uri)"
title: "PKIXRevocationChecker.setOcspResponder"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXRevocationChecker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXRevocationChecker.setOcspResponder

```java
public void setOcspResponder(URI uri)
```

Sets the URI that identifies the location of the OCSP responder. This
 overrides the `ocsp.responderURL` security property and any
 responder specified in a certificate's Authority Information Access
 Extension, as defined in RFC 5280.

**参数**

- **uri** — the responder URI
