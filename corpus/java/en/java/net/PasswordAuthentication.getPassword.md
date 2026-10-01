---
id: "java-en-function-passwordauthentication-getpassword"
language: "java"
lang: "en"
category: "function"
name: "PasswordAuthentication.getPassword"
signature: "public char[] getPassword()"
title: "PasswordAuthentication.getPassword"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/PasswordAuthentication.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PasswordAuthentication.getPassword

```java
public char[] getPassword()
```

Returns the user password.

 

 Note that this method returns a reference to the password. It is
 the caller's responsibility to zero out the password information after
 it is no longer needed.

**返回**

- the password
