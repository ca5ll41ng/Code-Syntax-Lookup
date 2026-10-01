---
id: "java-en-function-loginmodule-login"
language: "java"
lang: "en"
category: "function"
name: "LoginModule.login"
signature: "boolean login() throws LoginException"
title: "LoginModule.login"
directive: "method"
module: "java.base/javax.security.auth.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/spi/LoginModule.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LoginModule.login

```java
boolean login() throws LoginException
```

Method to authenticate a `Subject` (phase 1).

 

 The implementation of this method authenticates
 a `Subject`.  For example, it may prompt for
 `Subject` information such
 as a username and password and then attempt to verify the password.
 This method saves the result of the authentication attempt
 as private state within the `LoginModule`.

**返回**

- `true` if the authentication succeeded, or `false` if this `LoginModule` should be ignored.

**异常**

- **LoginException** — if the authentication fails
