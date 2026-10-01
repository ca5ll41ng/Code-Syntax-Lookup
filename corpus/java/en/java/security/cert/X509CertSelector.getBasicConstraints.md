---
id: "java-en-function-x509certselector-getbasicconstraints"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.getBasicConstraints"
signature: "public int getBasicConstraints()"
title: "X509CertSelector.getBasicConstraints"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.getBasicConstraints

```java
public int getBasicConstraints()
```

Returns the basic constraints constraint. If the value is greater than
 or equal to zero, the `X509Certificates` must include a
 basicConstraints extension with a pathLen of at least this value.
 If the value is -2, only end-entity certificates are accepted. If
 the value is -1, no basicConstraints check is done.

**返回**

- the value for the basic constraints constraint

**参见**

- #setBasicConstraints
