---
id: "java-en-function-kerberoskey-getkeytype"
language: "java"
lang: "en"
category: "function"
name: "KerberosKey.getKeyType"
signature: "public final int getKeyType()"
title: "KerberosKey.getKeyType"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosKey.getKeyType

```java
public final int getKeyType()
```

Returns the key type for this long-term key.

**返回**

- the key type.

**异常**

- **IllegalStateException** — if the key is destroyed
