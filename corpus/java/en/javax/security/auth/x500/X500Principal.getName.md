---
id: "java-en-function-x500principal-getname"
language: "java"
lang: "en"
category: "function"
name: "X500Principal.getName"
signature: "public String getName()"
title: "X500Principal.getName"
directive: "method"
module: "java.base/javax.security.auth.x500"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/x500/X500Principal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X500Principal.getName

```java
public String getName()
```

Returns a string representation of the X.500 distinguished name using
 the format defined in RFC 2253.

 

This method is equivalent to calling
 `getName(X500Principal.RFC2253)`.

**返回**

- the distinguished name of this `X500Principal`
