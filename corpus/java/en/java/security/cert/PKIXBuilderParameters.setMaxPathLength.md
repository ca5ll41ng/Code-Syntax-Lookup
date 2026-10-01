---
id: "java-en-function-pkixbuilderparameters-setmaxpathlength"
language: "java"
lang: "en"
category: "function"
name: "PKIXBuilderParameters.setMaxPathLength"
signature: "public void setMaxPathLength(int maxPathLength)"
title: "PKIXBuilderParameters.setMaxPathLength"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXBuilderParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXBuilderParameters.setMaxPathLength

```java
public void setMaxPathLength(int maxPathLength)
```

Sets the value of the maximum number of non-self-issued intermediate
 certificates that may exist in a certification path. A certificate
 is self-issued if the DNs that appear in the subject and issuer
 fields are identical and are not empty. Note that the last certificate
 in a certification path is not an intermediate certificate, and is not
 included in this limit. Usually the last certificate is an end entity
 certificate, but it can be a CA certificate. A PKIX
 `CertPathBuilder` instance must not build
 paths longer than the length specified.

 

 A value of 0 implies that the path can only contain
 a single certificate. A value of -1 implies that the
 path length is unconstrained (i.e. there is no maximum).
 The default maximum path length, if not specified, is 5.
 Setting a value less than -1 will cause an exception to be thrown.

 

 If any of the CA certificates contain the
 `BasicConstraintsExtension`, the value of the
 `pathLenConstraint` field of the extension overrides
 the maximum path length parameter whenever the result is a
 certification path of smaller length.

**参数**

- **maxPathLength** — the maximum number of non-self-issued intermediate certificates that may exist in a certification path

**异常**

- **InvalidParameterException** — if `maxPathLength` is set to a value less than -1

**参见**

- #getMaxPathLength
