---
id: "java-en-function-loginmodule-logout"
language: "java"
lang: "en"
category: "function"
name: "LoginModule.logout"
signature: "boolean logout() throws LoginException"
title: "LoginModule.logout"
directive: "method"
module: "java.base/javax.security.auth.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/spi/LoginModule.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LoginModule.logout

```java
boolean logout() throws LoginException
```

Method which logs out a `Subject`.

 

An implementation of this method might remove/destroy a Subject's
 Principals and Credentials.

      before removing it from the Principals or Credentials set
      of a `Subject`, otherwise a `NullPointerException`
      will be thrown as these sets `Subject()
      prohibit null elements`. This is especially important if
      this method is called after a login failure.

**返回**

- `true` if this method succeeded, or `false` if this `LoginModule` should be ignored.

**异常**

- **LoginException** — if the logout fails
