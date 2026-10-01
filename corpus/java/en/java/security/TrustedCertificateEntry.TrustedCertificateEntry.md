---
id: "java-en-function-trustedcertificateentry-trustedcertificateentry"
language: "java"
lang: "en"
category: "function"
name: "TrustedCertificateEntry.TrustedCertificateEntry"
signature: "public TrustedCertificateEntry(Certificate trustedCert)"
title: "TrustedCertificateEntry.TrustedCertificateEntry"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TrustedCertificateEntry.TrustedCertificateEntry

```java
public TrustedCertificateEntry(Certificate trustedCert)
```

Constructs a `TrustedCertificateEntry` with a
 trusted `Certificate`.

**参数**

- **trustedCert** — the trusted `Certificate`

**异常**

- **NullPointerException** — if `trustedCert` is `null`
