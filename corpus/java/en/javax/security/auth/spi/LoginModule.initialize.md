---
id: "java-en-function-loginmodule-initialize"
language: "java"
lang: "en"
category: "function"
name: "LoginModule.initialize"
signature: "void initialize(Subject subject, CallbackHandler callbackHandler, Map<String,?> sharedState, Map<String,?> options)"
title: "LoginModule.initialize"
directive: "method"
module: "java.base/javax.security.auth.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/spi/LoginModule.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LoginModule.initialize

```java
void initialize(Subject subject, CallbackHandler callbackHandler, Map<String,?> sharedState, Map<String,?> options)
```

Initialize this `LoginModule`.

 

 This method is called by the `LoginContext`
 after this `LoginModule` has been instantiated.
 The purpose of this method is to initialize this
 `LoginModule` with the relevant information.
 If this `LoginModule` does not understand
 any of the data stored in `sharedState` or
 `options` parameters, they can be ignored.

**参数**

- **subject** — the `Subject` to be authenticated.
- **callbackHandler** — a `CallbackHandler` for communicating with the end user (prompting for usernames and passwords, for example).
- **sharedState** — state shared with other configured LoginModules.
- **options** — options specified in the login `Configuration` for this particular `LoginModule`.
