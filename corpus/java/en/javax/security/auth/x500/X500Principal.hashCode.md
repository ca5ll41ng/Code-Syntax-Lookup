---
id: "java-en-function-x500principal-hashcode"
language: "java"
lang: "en"
category: "function"
name: "X500Principal.hashCode"
signature: "public int hashCode()"
title: "X500Principal.hashCode"
directive: "method"
module: "java.base/javax.security.auth.x500"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/x500/X500Principal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X500Principal.hashCode

```java
public int hashCode()
```

{@return a hash code for this `X500Principal`}

 

 The hash code is calculated via:
 `getName(X500Principal.CANONICAL).hashCode()`
