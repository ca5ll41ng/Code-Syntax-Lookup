---
id: "java-en-function-certpathrep-readresolve"
language: "java"
lang: "en"
category: "function"
name: "CertPathRep.readResolve"
signature: "protected Object readResolve() throws ObjectStreamException"
title: "CertPathRep.readResolve"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPathRep.readResolve

```java
protected Object readResolve() throws ObjectStreamException
```

Returns a `CertPath` constructed from the type and data of
 this `CertPathRep`.

**返回**

- the resolved `CertPath` object

**异常**

- **ObjectStreamException** — if a `CertPath` object could not be constructed
