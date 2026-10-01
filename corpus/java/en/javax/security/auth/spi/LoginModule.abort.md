---
id: "java-en-function-loginmodule-abort"
language: "java"
lang: "en"
category: "function"
name: "LoginModule.abort"
signature: "boolean abort() throws LoginException"
title: "LoginModule.abort"
directive: "method"
module: "java.base/javax.security.auth.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/spi/LoginModule.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LoginModule.abort

```java
boolean abort() throws LoginException
```

Method to abort the authentication process (phase 2).

 

 This method is called if the LoginContext's
 overall authentication failed.
 (the relevant REQUIRED, REQUISITE, SUFFICIENT and OPTIONAL LoginModules
 did not succeed).

 

 If this LoginModule's own authentication attempt
 succeeded (checked by retrieving the private state saved by the
 `login` method), then this method cleans up any state
 that was originally saved.

**返回**

- `true` if this method succeeded, or `false` if this `LoginModule` should be ignored.

**异常**

- **LoginException** — if the abort fails
