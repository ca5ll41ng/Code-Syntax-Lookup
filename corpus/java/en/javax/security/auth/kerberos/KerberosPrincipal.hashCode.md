---
id: "java-en-function-kerberosprincipal-hashcode"
language: "java"
lang: "en"
category: "function"
name: "KerberosPrincipal.hashCode"
signature: "public int hashCode()"
title: "KerberosPrincipal.hashCode"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosPrincipal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosPrincipal.hashCode

```java
public int hashCode()
```

{@return a hash code for this `KerberosPrincipal`}
 The hash code is defined to be the result of the following calculation:
 
```
`hashCode = getName().hashCode();
 `
```
