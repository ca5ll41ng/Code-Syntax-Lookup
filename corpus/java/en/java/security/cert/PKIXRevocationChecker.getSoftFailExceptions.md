---
id: "java-en-function-pkixrevocationchecker-getsoftfailexceptions"
language: "java"
lang: "en"
category: "function"
name: "PKIXRevocationChecker.getSoftFailExceptions"
signature: "public abstract List<CertPathValidatorException> getSoftFailExceptions()"
title: "PKIXRevocationChecker.getSoftFailExceptions"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXRevocationChecker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXRevocationChecker.getSoftFailExceptions

```java
public abstract List<CertPathValidatorException> getSoftFailExceptions()
```

Returns a list containing the exceptions that are ignored by the
 revocation checker when the `SOFT_FAIL SOFT_FAIL` option
 is set. The list is cleared each time `init init` is called.
 The list is ordered in ascending order according to the certificate
 index returned by `getIndex getIndex`
 method of each entry.
 

 An implementation of `PKIXRevocationChecker` is responsible for
 adding the ignored exceptions to the list.

**返回**

- an unmodifiable list containing the ignored exceptions. The list is empty if no exceptions have been ignored.
