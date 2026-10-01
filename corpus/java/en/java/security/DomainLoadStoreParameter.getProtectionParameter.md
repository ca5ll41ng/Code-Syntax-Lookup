---
id: "java-en-function-domainloadstoreparameter-getprotectionparameter"
language: "java"
lang: "en"
category: "function"
name: "DomainLoadStoreParameter.getProtectionParameter"
signature: "public KeyStore.ProtectionParameter getProtectionParameter()"
title: "DomainLoadStoreParameter.getProtectionParameter"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/DomainLoadStoreParameter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DomainLoadStoreParameter.getProtectionParameter

```java
public KeyStore.ProtectionParameter getProtectionParameter()
```

Gets the keystore protection parameters for this domain.
 Keystore domains do not support a protection parameter.

**返回**

- always returns `null`
