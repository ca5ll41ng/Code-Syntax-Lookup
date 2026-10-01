---
id: "java-en-function-x509certselector-setbasicconstraints"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.setBasicConstraints"
signature: "public void setBasicConstraints(int minMaxPathLen)"
title: "X509CertSelector.setBasicConstraints"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.setBasicConstraints

```java
public void setBasicConstraints(int minMaxPathLen)
```

Sets the basic constraints constraint. If the value is greater than or
 equal to zero, `X509Certificates` must include a
 basicConstraints extension with
 a pathLen of at least this value. If the value is -2, only end-entity
 certificates are accepted. If the value is -1, no check is done.
 

 This constraint is useful when building a certification path forward
 (from the target toward the trust anchor. If a partial path has been
 built, any candidate certificate must have a maxPathLen value greater
 than or equal to the number of certificates in the partial path.

**参数**

- **minMaxPathLen** — the value for the basic constraints constraint

**异常**

- **IllegalArgumentException** — if the value is less than -2

**参见**

- #getBasicConstraints
