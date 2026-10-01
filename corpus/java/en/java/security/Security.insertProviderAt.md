---
id: "java-en-function-security-insertproviderat"
language: "java"
lang: "en"
category: "function"
name: "Security.insertProviderAt"
signature: "public static synchronized int insertProviderAt(Provider provider, int position)"
title: "Security.insertProviderAt"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Security.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Security.insertProviderAt

```java
public static synchronized int insertProviderAt(Provider provider, int position)
```

Adds a new provider, at a specified position. The position is
 the preference order in which providers are searched for
 requested algorithms.  The position is 1-based, that is,
 1 is most preferred, followed by 2, and so on.  If the position
 is less than 1 or greater than n, where n is the number of installed
 providers, the provider (if not already installed) is inserted at
 the end of the list, or at the n + 1 position.

 

If the given provider is installed at the requested position,
 the provider that used to be at that position, and all providers
 with a position greater than `position`, are shifted up
 one position (towards the end of the list of installed providers).

 

A provider cannot be added if it is already installed.

**参数**

- **provider** — the provider to be added.
- **position** — the preference position that the caller would like for this provider.

**返回**

- the actual preference position in which the provider was added, or -1 if the provider was not added because it is already installed.

**异常**

- **NullPointerException** — if provider is `null`

**参见**

- #getProvider
- #removeProvider
