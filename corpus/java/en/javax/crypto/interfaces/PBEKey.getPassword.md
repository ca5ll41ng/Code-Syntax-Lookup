---
id: "java-en-function-pbekey-getpassword"
language: "java"
lang: "en"
category: "function"
name: "PBEKey.getPassword"
signature: "char[] getPassword()"
title: "PBEKey.getPassword"
directive: "method"
module: "java.base/javax.crypto.interfaces"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/interfaces/PBEKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PBEKey.getPassword

```java
char[] getPassword()
```

Returns the password.

 

 Note: this method should return a copy of the password. It is
 the caller's responsibility to zero out the password information after
 it is no longer needed.

**返回**

- the password.
