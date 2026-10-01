---
id: "java-en-function-x509certselector-setserialnumber"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.setSerialNumber"
signature: "public void setSerialNumber(BigInteger serial)"
title: "X509CertSelector.setSerialNumber"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.setSerialNumber

```java
public void setSerialNumber(BigInteger serial)
```

Sets the serialNumber criterion. The specified serial number
 must match the certificate serial number in the
 `X509Certificate`. If `null`, any certificate
 serial number will do.

**参数**

- **serial** — the certificate serial number to match (or `null`)

**参见**

- #getSerialNumber
