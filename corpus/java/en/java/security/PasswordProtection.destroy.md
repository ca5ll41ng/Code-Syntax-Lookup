---
id: "java-en-function-passwordprotection-destroy"
language: "java"
lang: "en"
category: "function"
name: "PasswordProtection.destroy"
signature: "public synchronized void destroy() throws DestroyFailedException"
title: "PasswordProtection.destroy"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PasswordProtection.destroy

```java
public synchronized void destroy() throws DestroyFailedException
```

Clears the password.

**异常**

- **DestroyFailedException** — if this method was unable to clear the password
