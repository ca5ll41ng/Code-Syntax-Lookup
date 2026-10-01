---
id: "java-en-function-certificate-getguarantor"
language: "java"
lang: "en"
category: "function"
name: "Certificate.getGuarantor"
signature: "public abstract Principal getGuarantor()"
title: "Certificate.getGuarantor"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Certificate.getGuarantor

```java
public abstract Principal getGuarantor()
```

Returns the guarantor of the certificate, that is, the principal
 guaranteeing that the public key associated with this certificate
 is that of the principal associated with this certificate. For X.509
 certificates, the guarantor will typically be a Certificate Authority
 (such as the United States Postal Service or Verisign, Inc.).

**返回**

- the guarantor which guaranteed the principal-key binding.
