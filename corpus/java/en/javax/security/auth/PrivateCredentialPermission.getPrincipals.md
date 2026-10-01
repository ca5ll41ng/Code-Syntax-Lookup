---
id: "java-en-function-privatecredentialpermission-getprincipals"
language: "java"
lang: "en"
category: "function"
name: "PrivateCredentialPermission.getPrincipals"
signature: "public String[][] getPrincipals()"
title: "PrivateCredentialPermission.getPrincipals"
directive: "method"
module: "java.base/javax.security.auth"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/PrivateCredentialPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrivateCredentialPermission.getPrincipals

```java
public String[][] getPrincipals()
```

Returns the `Principal` classes and names
 associated with this `PrivateCredentialPermission`.
 The information is returned as a two-dimensional array (array[x][y]).
 The 'x' value corresponds to the number of `Principal`
 class and name pairs.  When (y==0), it corresponds to
 the `Principal` class value, and when (y==1),
 it corresponds to the `Principal` name value.
 For example, array[0][0] corresponds to the class name of
 the first `Principal` in the array.  array[0][1]
 corresponds to the `Principal` name of the
 first `Principal` in the array.

**返回**

- the `Principal` class and names associated with this `PrivateCredentialPermission`.
