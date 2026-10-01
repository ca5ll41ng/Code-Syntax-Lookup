---
id: "java-en-function-privatekeyentry-getcertificate"
language: "java"
lang: "en"
category: "function"
name: "PrivateKeyEntry.getCertificate"
signature: "public Certificate getCertificate()"
title: "PrivateKeyEntry.getCertificate"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrivateKeyEntry.getCertificate

```java
public Certificate getCertificate()
```

Gets the end entity `Certificate`
 from the certificate chain in this entry.

**返回**

- the end entity `Certificate` (at index 0) from the certificate chain in this entry. If the certificate is of type X.509, the runtime type of the returned certificate is `X509Certificate`.
