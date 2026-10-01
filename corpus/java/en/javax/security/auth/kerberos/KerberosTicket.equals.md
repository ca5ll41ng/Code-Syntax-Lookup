---
id: "java-en-function-kerberosticket-equals"
language: "java"
lang: "en"
category: "function"
name: "KerberosTicket.equals"
signature: "public boolean equals(Object other)"
title: "KerberosTicket.equals"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosTicket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosTicket.equals

```java
public boolean equals(Object other)
```

Compares the specified object with this `KerberosTicket` for equality.
 Returns true if the given object is also a
 `KerberosTicket` and the two
 `KerberosTicket` instances are equivalent.
 A destroyed `KerberosTicket` object is only equal to itself.

**参数**

- **other** — the object to compare to

**返回**

- true if the specified object is equal to this `KerberosTicket`, false otherwise.

> *Since 1.6*
