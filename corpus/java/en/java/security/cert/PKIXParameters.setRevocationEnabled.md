---
id: "java-en-function-pkixparameters-setrevocationenabled"
language: "java"
lang: "en"
category: "function"
name: "PKIXParameters.setRevocationEnabled"
signature: "public void setRevocationEnabled(boolean val)"
title: "PKIXParameters.setRevocationEnabled"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXParameters.setRevocationEnabled

```java
public void setRevocationEnabled(boolean val)
```

Sets the RevocationEnabled flag. If this flag is true, the default
 revocation checking mechanism of the underlying PKIX service provider
 will be used, unless a `PKIXRevocationChecker` is passed in
 as a `CertPathChecker` (see below for further explanation). If
 this flag is false, the default revocation checking mechanism will be
 disabled (not used).
 

 When a `PKIXParameters` object is created, this flag is set
 to true. This setting reflects the most common strategy for checking
 revocation, since each service provider must support revocation
 checking to be PKIX compliant. Sophisticated applications should set
 this flag to false when it is not practical to use a PKIX service
 provider's default revocation checking mechanism or when an alternative
 revocation checking mechanism is to be substituted (by also calling the
 `addCertPathChecker addCertPathChecker` or `setCertPathCheckers setCertPathCheckers` methods).
 

 Note that when a `PKIXRevocationChecker` is passed in as a
 parameter via the `addCertPathChecker` or
 `setCertPathCheckers` methods, it will be used to check
 revocation irrespective of the setting of the RevocationEnabled flag.

**参数**

- **val** — the new value of the RevocationEnabled flag
