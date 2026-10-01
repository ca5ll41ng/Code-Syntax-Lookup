---
id: "java-en-function-kerberoscredmessage-equals"
language: "java"
lang: "en"
category: "function"
name: "KerberosCredMessage.equals"
signature: "public boolean equals(Object other)"
title: "KerberosCredMessage.equals"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosCredMessage.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosCredMessage.equals

```java
public boolean equals(Object other)
```

Compares the specified object with this `KerberosCredMessage`
 for equality. Returns true if the given object is also a
 `KerberosCredMessage` and the two `KerberosCredMessage`
 instances are equivalent. More formally two `KerberosCredMessage`
 instances are equal if they have equal sender, recipient, and encoded
 KRB_CRED messages.
 A destroyed `KerberosCredMessage` object is only equal to itself.

**参数**

- **other** — the object to compare to

**返回**

- true if the specified object is equal to this `KerberosCredMessage`, false otherwise.
