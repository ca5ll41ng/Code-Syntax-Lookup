---
id: "java-en-function-kerberoskey-getformat"
language: "java"
lang: "en"
category: "function"
name: "KerberosKey.getFormat"
signature: "public final String getFormat()"
title: "KerberosKey.getFormat"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosKey.getFormat

```java
public final String getFormat()
```

Returns the name of the encoding format for this secret key.

**返回**

- the String "RAW"

**异常**

- **IllegalStateException** — if the key is destroyed
