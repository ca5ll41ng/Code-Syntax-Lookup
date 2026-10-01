---
id: "java-en-function-provider-getservice"
language: "java"
lang: "en"
category: "function"
name: "Provider.getService"
signature: "public Service getService(String type, String algorithm)"
title: "Provider.getService"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Provider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Provider.getService

```java
public Service getService(String type, String algorithm)
```

Get the service describing this Provider's implementation of the
 specified type of this algorithm or alias. If no such
 implementation exists, this method returns `null`. If there are two
 matching services, one added to this provider using
 `putService putService` and one added via `put put`,
 the service added via `putService putService` is returned.

**参数**

- **type** — the type of `Service service` requested (for example, `MessageDigest`)
- **algorithm** — the case-insensitive algorithm name (or alternate alias) of the service requested (for example, `SHA-1`)

**返回**

- the service describing this Provider's matching service or `null` if no such service exists

**异常**

- **NullPointerException** — if type or algorithm is `null`

> *Since 1.5*
