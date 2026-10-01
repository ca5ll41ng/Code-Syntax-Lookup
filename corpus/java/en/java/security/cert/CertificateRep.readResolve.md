---
id: "java-en-function-certificaterep-readresolve"
language: "java"
lang: "en"
category: "function"
name: "CertificateRep.readResolve"
signature: "protected Object readResolve() throws java.io.ObjectStreamException"
title: "CertificateRep.readResolve"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertificateRep.readResolve

```java
protected Object readResolve() throws java.io.ObjectStreamException
```

Returns a `Certificate` with the type and data of this
 `CertificateRep`.

**返回**

- the resolved `Certificate` object

**异常**

- **java.io.ObjectStreamException** — if the `Certificate` could not be resolved
