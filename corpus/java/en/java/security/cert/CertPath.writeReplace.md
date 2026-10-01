---
id: "java-en-function-certpath-writereplace"
language: "java"
lang: "en"
category: "function"
name: "CertPath.writeReplace"
signature: "protected Object writeReplace() throws ObjectStreamException"
title: "CertPath.writeReplace"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPath.writeReplace

```java
protected Object writeReplace() throws ObjectStreamException
```

Replaces the `CertPath` to be serialized with a
 `CertPathRep CertPathRep` object containing the
 `Certificate` type and encoded bytes of the `CertPath`.

**返回**

- a `CertPathRep` containing the `Certificate` type and encoded bytes of the `CertPath`

**异常**

- **ObjectStreamException** — if a `CertPathRep` object representing this certification path could not be created
