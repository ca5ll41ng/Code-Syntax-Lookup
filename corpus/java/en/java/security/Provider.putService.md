---
id: "java-en-function-provider-putservice"
language: "java"
lang: "en"
category: "function"
name: "Provider.putService"
signature: "protected void putService(Service s)"
title: "Provider.putService"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Provider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Provider.putService

```java
protected void putService(Service s)
```

Add a service. If a service of the same type with the same algorithm
 name exists, and it was added using `putService putService`,
 it is replaced by the new service.
 This method also places information about this service
 in the provider's Hashtable values in the format described in the
 `security_guide_jca
 Java Cryptography Architecture (JCA) Reference Guide`.

**参数**

- **s** — the Service to add

**异常**

- **NullPointerException** — if s is `null`

> *Since 1.5*
