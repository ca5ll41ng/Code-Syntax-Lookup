---
id: "java-en-function-passwordprotection-getpassword"
language: "java"
lang: "en"
category: "function"
name: "PasswordProtection.getPassword"
signature: "public synchronized char[] getPassword()"
title: "PasswordProtection.getPassword"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PasswordProtection.getPassword

```java
public synchronized char[] getPassword()
```

Gets the password.

 

Note that this method returns a reference to the password.
 If a clone of the array is created it is the caller's
 responsibility to zero out the password information
 after it is no longer needed.

**返回**

- the password, which may be `null`

**异常**

- **IllegalStateException** — if the password has been cleared (destroyed)

**参见**

- #destroy()
