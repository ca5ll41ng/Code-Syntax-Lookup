---
id: "java-en-function-kerberoskey-kerberoskey"
language: "java"
lang: "en"
category: "function"
name: "KerberosKey.KerberosKey"
signature: "public KerberosKey(KerberosPrincipal principal, byte[] keyBytes, int keyType, int versionNum)"
title: "KerberosKey.KerberosKey"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosKey.KerberosKey

```java
public KerberosKey(KerberosPrincipal principal, byte[] keyBytes, int keyType, int versionNum)
```

Constructs a `KerberosKey` from the given bytes when the key type
 and key version number are known. This can be used when reading the
 secret key information from a Kerberos "keytab".

**参数**

- **principal** — the principal that this secret key belongs to
- **keyBytes** — the key material for the secret key
- **keyType** — the key type for the secret key as defined by the Kerberos protocol specification.
- **versionNum** — the version number of this secret key
