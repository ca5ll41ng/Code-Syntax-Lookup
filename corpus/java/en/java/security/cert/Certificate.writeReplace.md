---
id: "java-en-function-certificate-writereplace"
language: "java"
lang: "en"
category: "function"
name: "Certificate.writeReplace"
signature: "protected Object writeReplace() throws java.io.ObjectStreamException"
title: "Certificate.writeReplace"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Certificate.writeReplace

```java
protected Object writeReplace() throws java.io.ObjectStreamException
```

Replace the `Certificate` to be serialized with a
 `CertificateRep CertificateRep` object containing the type and
 encoded bytes of the `Certificate`.

**返回**

- a `CertificateRep` object containing the type and encoded bytes of the `Certificate`

**异常**

- **java.io.ObjectStreamException** — if a `CertificateRep` object representing this `Certificate` could not be created

> *Since 1.3*
