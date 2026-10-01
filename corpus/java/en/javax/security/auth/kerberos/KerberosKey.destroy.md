---
id: "java-en-function-kerberoskey-destroy"
language: "java"
lang: "en"
category: "function"
name: "KerberosKey.destroy"
signature: "public void destroy() throws DestroyFailedException"
title: "KerberosKey.destroy"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosKey.destroy

```java
public void destroy() throws DestroyFailedException
```

Destroys this key by clearing out the key material of this secret key.

**异常**

- **DestroyFailedException** — if some error occurs while destroying this key.
