---
id: "java-en-function-pkixparameters-setcertpathcheckers"
language: "java"
lang: "en"
category: "function"
name: "PKIXParameters.setCertPathCheckers"
signature: "public void setCertPathCheckers(List<PKIXCertPathChecker> checkers)"
title: "PKIXParameters.setCertPathCheckers"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXParameters.setCertPathCheckers

```java
public void setCertPathCheckers(List<PKIXCertPathChecker> checkers)
```

Sets a `List` of additional certification path checkers. If
 the specified `List` contains an object that is not a
 `PKIXCertPathChecker`, it is ignored.
 

 Each `PKIXCertPathChecker` specified implements
 additional checks on a certificate. Typically, these are checks to
 process and verify private extensions contained in certificates.
 Each `PKIXCertPathChecker` should be instantiated with any
 initialization parameters needed to execute the check.
 

 This method allows sophisticated applications to extend a PKIX
 `CertPathValidator` or `CertPathBuilder`.
 Each of the specified `PKIXCertPathChecker`s will be called,
 in turn, by a PKIX `CertPathValidator` or
 `CertPathBuilder` for each certificate processed or
 validated.
 

 Regardless of whether these additional `PKIXCertPathChecker`s
 are set, a PKIX `CertPathValidator` or
 `CertPathBuilder` must perform all of the required PKIX
 checks on each certificate. The one exception to this rule is if the
 RevocationEnabled flag is set to false (see the `setRevocationEnabled setRevocationEnabled` method).
 

 Note that the `List` supplied here is copied and each
 `PKIXCertPathChecker` in the list is cloned to protect
 against subsequent modifications.

**参数**

- **checkers** — a `List` of `PKIXCertPathChecker`s. May be `null`, in which case no additional checkers will be used.

**异常**

- **ClassCastException** — if any of the elements in the list are not of type `java.security.cert.PKIXCertPathChecker`

**参见**

- #getCertPathCheckers
