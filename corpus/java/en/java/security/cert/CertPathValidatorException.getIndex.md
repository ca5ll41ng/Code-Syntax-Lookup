---
id: "java-en-function-certpathvalidatorexception-getindex"
language: "java"
lang: "en"
category: "function"
name: "CertPathValidatorException.getIndex"
signature: "public int getIndex()"
title: "CertPathValidatorException.getIndex"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPathValidatorException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPathValidatorException.getIndex

```java
public int getIndex()
```

Returns the index of the certificate in the certification path
 that caused the exception to be thrown. Note that the list of
 certificates in a `CertPath` is zero based. If no
 index has been set, -1 is returned.

**返回**

- the index that has been set, or -1 if none has been set
