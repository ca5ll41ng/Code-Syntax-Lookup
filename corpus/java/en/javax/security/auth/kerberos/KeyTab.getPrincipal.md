---
id: "java-en-function-keytab-getprincipal"
language: "java"
lang: "en"
category: "function"
name: "KeyTab.getPrincipal"
signature: "public KerberosPrincipal getPrincipal()"
title: "KeyTab.getPrincipal"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KeyTab.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyTab.getPrincipal

```java
public KerberosPrincipal getPrincipal()
```

Returns the service principal this `KeyTab` object
 is bound to. Returns `null` if it's not bound.
 

 Please note the deprecated constructors create a `KeyTab` object
 bound for some unknown principal. In this case, this method also returns
 null. User can call `isBound` to verify this case.

**返回**

- the service principal

> *Since 1.8*
