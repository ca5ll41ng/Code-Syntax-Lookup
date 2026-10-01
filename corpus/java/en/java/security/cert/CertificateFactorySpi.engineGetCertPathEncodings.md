---
id: "java-en-function-certificatefactoryspi-enginegetcertpathencodings"
language: "java"
lang: "en"
category: "function"
name: "CertificateFactorySpi.engineGetCertPathEncodings"
signature: "public Iterator<String> engineGetCertPathEncodings()"
title: "CertificateFactorySpi.engineGetCertPathEncodings"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertificateFactorySpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertificateFactorySpi.engineGetCertPathEncodings

```java
public Iterator<String> engineGetCertPathEncodings()
```

Returns an iteration of the `CertPath` encodings supported
 by this certificate factory, with the default encoding first. See
 the CertPath Encodings section in the 
 Java Security Standard Algorithm Names Specification
 for information about standard encoding names.
 

 Attempts to modify the returned `Iterator` via its
 `remove` method result in an
 `UnsupportedOperationException`.

 

 This method was added to version 1.4 of the Java 2 Platform
 Standard Edition. In order to maintain backwards compatibility with
 existing service providers, this method cannot be `abstract`
 and by default throws an `UnsupportedOperationException`.

**返回**

- an `Iterator` over the names of the supported `CertPath` encodings (as `String`s)

**异常**

- **UnsupportedOperationException** — if the method is not supported

> *Since 1.4*
