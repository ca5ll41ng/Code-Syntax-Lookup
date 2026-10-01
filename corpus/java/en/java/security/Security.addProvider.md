---
id: "java-en-function-security-addprovider"
language: "java"
lang: "en"
category: "function"
name: "Security.addProvider"
signature: "public static int addProvider(Provider provider)"
title: "Security.addProvider"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Security.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Security.addProvider

```java
public static int addProvider(Provider provider)
```

Adds a provider to the next position available.

**参数**

- **provider** — the provider to be added.

**返回**

- the preference position in which the provider was added, or -1 if the provider was not added because it is already installed.

**异常**

- **NullPointerException** — if provider is `null`

**参见**

- #getProvider
- #removeProvider
