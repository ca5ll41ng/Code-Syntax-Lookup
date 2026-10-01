---
id: "java-en-function-security-getprovider"
language: "java"
lang: "en"
category: "function"
name: "Security.getProvider"
signature: "public static Provider getProvider(String name)"
title: "Security.getProvider"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Security.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Security.getProvider

```java
public static Provider getProvider(String name)
```

Returns the provider installed with the specified name, if
 any. Returns `null` if no provider with the specified name is
 installed or if name is `null`.

**参数**

- **name** — the name of the provider to get.

**返回**

- the provider of the specified name.

**参见**

- #removeProvider
- #addProvider
