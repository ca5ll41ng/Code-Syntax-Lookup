---
id: "java-en-function-logincontext-login"
language: "java"
lang: "en"
category: "function"
name: "LoginContext.login"
signature: "public void login() throws LoginException"
title: "LoginContext.login"
directive: "method"
module: "java.base/javax.security.auth.login"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/login/LoginContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LoginContext.login

```java
public void login() throws LoginException
```

Perform the authentication.

 

 This method invokes the `login` method for each
 LoginModule configured for the name specified to the
 `LoginContext` constructor, as determined by the login
 `Configuration`.  Each `LoginModule`
 then performs its respective type of authentication
 (username/password, smart card pin verification, etc.).

 

 This method completes a 2-phase authentication process by
 calling each configured LoginModule's `commit` method
 if the overall authentication succeeded (the relevant REQUIRED,
 REQUISITE, SUFFICIENT, and OPTIONAL LoginModules succeeded),
 or by calling each configured LoginModule's `abort` method
 if the overall authentication failed.  If authentication succeeded,
 each successful LoginModule's `commit` method associates
 the relevant Principals and Credentials with the `Subject`.
 If authentication failed, each LoginModule's `abort` method
 removes/destroys any previously stored state.

 

 If the `commit` phase of the authentication process
 fails, then the overall authentication fails and this method
 invokes the `abort` method for each configured
 `LoginModule`.

 

 If the `abort` phase
 fails for any reason, then this method propagates the
 original exception thrown either during the `login` phase
 or the `commit` phase.  In either case, the overall
 authentication fails.

 

 In the case where multiple LoginModules fail,
 this method propagates the exception raised by the first
 `LoginModule` which failed.

 

 Note that if this method enters the `abort` phase
 (either the `login` or `commit` phase failed),
 this method invokes all LoginModules configured for the
 application regardless of their respective `Configuration`
 flag parameters.  Essentially this means that `Requisite`
 and `Sufficient` semantics are ignored during the
 `abort` phase.  This guarantees that proper cleanup
 and state restoration can take place.

**异常**

- **LoginException** — if the authentication fails.
