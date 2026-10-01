---
id: "java-en-function-passwordcallback-setpassword"
language: "java"
lang: "en"
category: "function"
name: "PasswordCallback.setPassword"
signature: "public void setPassword(char[] password)"
title: "PasswordCallback.setPassword"
directive: "method"
module: "java.base/javax.security.auth.callback"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/callback/PasswordCallback.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PasswordCallback.setPassword

```java
public void setPassword(char[] password)
```

Set the retrieved password.

 

 This method makes a copy of the input `password`
 before storing it.

**参数**

- **password** — the retrieved password, which may be null.

**参见**

- #getPassword
