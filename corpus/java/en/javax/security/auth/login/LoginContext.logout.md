---
id: "java-en-function-logincontext-logout"
language: "java"
lang: "en"
category: "function"
name: "LoginContext.logout"
signature: "public void logout() throws LoginException"
title: "LoginContext.logout"
directive: "method"
module: "java.base/javax.security.auth.login"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/login/LoginContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LoginContext.logout

```java
public void logout() throws LoginException
```

Logout the `Subject`.

 

 This method invokes the `logout` method for each
 `LoginModule` configured for this `LoginContext`.
 Each `LoginModule` performs its respective logout procedure
 which may include removing/destroying
 `Principal` and `Credential` information
 from the `Subject` and state cleanup.

 

 Note that this method invokes all LoginModules configured for the
 application regardless of their respective
 `Configuration` flag parameters.  Essentially this means
 that `Requisite` and `Sufficient` semantics are
 ignored for this method.  This guarantees that proper cleanup
 and state restoration can take place.

**异常**

- **LoginException** — if the logout fails.
