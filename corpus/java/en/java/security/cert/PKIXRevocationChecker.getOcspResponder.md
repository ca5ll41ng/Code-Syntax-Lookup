---
id: "java-en-function-pkixrevocationchecker-getocspresponder"
language: "java"
lang: "en"
category: "function"
name: "PKIXRevocationChecker.getOcspResponder"
signature: "public URI getOcspResponder()"
title: "PKIXRevocationChecker.getOcspResponder"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXRevocationChecker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXRevocationChecker.getOcspResponder

```java
public URI getOcspResponder()
```

Gets the URI that identifies the location of the OCSP responder. This
 overrides the `ocsp.responderURL` security property. If this
 parameter or the `ocsp.responderURL` property is not set, the
 location is determined from the certificate's Authority Information
 Access Extension, as defined in RFC 5280.

**返回**

- the responder URI, or `null` if not set
