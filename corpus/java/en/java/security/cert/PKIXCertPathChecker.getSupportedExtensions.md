---
id: "java-en-function-pkixcertpathchecker-getsupportedextensions"
language: "java"
lang: "en"
category: "function"
name: "PKIXCertPathChecker.getSupportedExtensions"
signature: "public abstract Set<String> getSupportedExtensions()"
title: "PKIXCertPathChecker.getSupportedExtensions"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXCertPathChecker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXCertPathChecker.getSupportedExtensions

```java
public abstract Set<String> getSupportedExtensions()
```

Returns an immutable `Set` of X.509 certificate extensions
 that this `PKIXCertPathChecker` supports (i.e. recognizes, is
 able to process), or `null` if no extensions are supported.
 

 Each element of the set is a `String` representing the
 Object Identifier (OID) of the X.509 extension that is supported.
 The OID is represented by a set of nonnegative integers separated by
 periods.
 

 All X.509 certificate extensions that a `PKIXCertPathChecker`
 might possibly be able to process should be included in the set.

**返回**

- an immutable `Set` of X.509 extension OIDs (in `String` format) supported by this `PKIXCertPathChecker`, or `null` if no extensions are supported
