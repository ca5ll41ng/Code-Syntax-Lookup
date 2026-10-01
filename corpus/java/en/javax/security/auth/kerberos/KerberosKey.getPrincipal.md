---
id: "java-en-function-kerberoskey-getprincipal"
language: "java"
lang: "en"
category: "function"
name: "KerberosKey.getPrincipal"
signature: "public final KerberosPrincipal getPrincipal()"
title: "KerberosKey.getPrincipal"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosKey.getPrincipal

```java
public final KerberosPrincipal getPrincipal()
```

Returns the principal that this key belongs to.

**返回**

- the principal this key belongs to.

**异常**

- **IllegalStateException** — if the key is destroyed
