---
id: "java-en-function-security-removeprovider"
language: "java"
lang: "en"
category: "function"
name: "Security.removeProvider"
signature: "public static synchronized void removeProvider(String name)"
title: "Security.removeProvider"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Security.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Security.removeProvider

```java
public static synchronized void removeProvider(String name)
```

Removes the provider with the specified name.

 

When the specified provider is removed, all providers located
 at a position greater than where the specified provider was are shifted
 down one position (towards the head of the list of installed
 providers).

 

This method returns silently if the provider is not installed or
 if name is `null`.

**参数**

- **name** — the name of the provider to remove.

**参见**

- #getProvider
- #addProvider
