---
id: "java-en-function-certificatefactory-getcertpathencodings"
language: "java"
lang: "en"
category: "function"
name: "CertificateFactory.getCertPathEncodings"
signature: "public final Iterator<String> getCertPathEncodings()"
title: "CertificateFactory.getCertPathEncodings"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertificateFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertificateFactory.getCertPathEncodings

```java
public final Iterator<String> getCertPathEncodings()
```

Returns an iteration of the `CertPath` encodings supported
 by this certificate factory, with the default encoding first. See
 the CertPath Encodings section in the 
 Java Security Standard Algorithm Names Specification
 for information about standard encoding names and their formats.
 

 Attempts to modify the returned `Iterator` via its
 `remove` method result in an
 `UnsupportedOperationException`.

**返回**

- an `Iterator` over the names of the supported `CertPath` encodings (as `String`s)

> *Since 1.4*
