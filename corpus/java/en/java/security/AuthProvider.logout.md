---
id: "java-en-function-authprovider-logout"
language: "java"
lang: "en"
category: "function"
name: "AuthProvider.logout"
signature: "public abstract void logout() throws LoginException"
title: "AuthProvider.logout"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/AuthProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AuthProvider.logout

```java
public abstract void logout() throws LoginException
```

Log out from this provider.

**异常**

- **IllegalStateException** — if the provider requires configuration and `configure` has not been called
- **LoginException** — if the logout operation fails
