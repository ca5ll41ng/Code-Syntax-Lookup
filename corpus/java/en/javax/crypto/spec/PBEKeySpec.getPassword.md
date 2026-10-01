---
id: "java-en-function-pbekeyspec-getpassword"
language: "java"
lang: "en"
category: "function"
name: "PBEKeySpec.getPassword"
signature: "public final synchronized char[] getPassword()"
title: "PBEKeySpec.getPassword"
directive: "method"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/PBEKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PBEKeySpec.getPassword

```java
public final synchronized char[] getPassword()
```

Returns a copy of the password.

 

 Note: this method returns a copy of the password. It is
 the caller's responsibility to zero out the password information after
 it is no longer needed.

**返回**

- the password.

**异常**

- **IllegalStateException** — if password has been cleared by calling clearPassword method.
