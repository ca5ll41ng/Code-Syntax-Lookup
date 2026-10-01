---
id: "java-en-function-kerberoskey-equals"
language: "java"
lang: "en"
category: "function"
name: "KerberosKey.equals"
signature: "public boolean equals(Object other)"
title: "KerberosKey.equals"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosKey.equals

```java
public boolean equals(Object other)
```

Compares the specified object with this `KerberosKey` for
 equality. Returns true if the given object is also a
 `KerberosKey` and the two
 `KerberosKey` instances are equivalent.
 A destroyed `KerberosKey` object is only equal to itself.

**参数**

- **other** — the object to compare to

**返回**

- true if the specified object is equal to this `KerberosKey`, false otherwise.

> *Since 1.6*
