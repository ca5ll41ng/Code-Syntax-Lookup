---
id: "java-en-function-kerberosprincipal-equals"
language: "java"
lang: "en"
category: "function"
name: "KerberosPrincipal.equals"
signature: "public boolean equals(Object obj)"
title: "KerberosPrincipal.equals"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosPrincipal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosPrincipal.equals

```java
public boolean equals(Object obj)
```

Compares the specified object with this principal for equality.
 Returns true if the given object is also a
 `KerberosPrincipal` and the two
 `KerberosPrincipal` instances are equivalent.
 More formally two `KerberosPrincipal` instances are equal
 if the values returned by `getName()` are equal.

**参数**

- **obj** — the object to compare to

**返回**

- true if the object passed in represents the same principal as this one, false otherwise.
