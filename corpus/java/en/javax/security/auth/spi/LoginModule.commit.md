---
id: "java-en-function-loginmodule-commit"
language: "java"
lang: "en"
category: "function"
name: "LoginModule.commit"
signature: "boolean commit() throws LoginException"
title: "LoginModule.commit"
directive: "method"
module: "java.base/javax.security.auth.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/spi/LoginModule.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LoginModule.commit

```java
boolean commit() throws LoginException
```

Method to commit the authentication process (phase 2).

 

 This method is called if the LoginContext's
 overall authentication succeeded
 (the relevant REQUIRED, REQUISITE, SUFFICIENT and OPTIONAL LoginModules
 succeeded).

 

 If this LoginModule's own authentication attempt
 succeeded (checked by retrieving the private state saved by the
 `login` method), then this method associates relevant
 Principals and Credentials with the `Subject` located in the
 `LoginModule`.  If this LoginModule's own
 authentication attempted failed, then this method removes/destroys
 any state that was originally saved.

**返回**

- `true` if this method succeeded, or `false` if this `LoginModule` should be ignored.

**异常**

- **LoginException** — if the commit fails
