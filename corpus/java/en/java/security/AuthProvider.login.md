---
id: "java-en-function-authprovider-login"
language: "java"
lang: "en"
category: "function"
name: "AuthProvider.login"
signature: "public abstract void login(Subject subject, CallbackHandler handler) throws LoginException"
title: "AuthProvider.login"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/AuthProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AuthProvider.login

```java
public abstract void login(Subject subject, CallbackHandler handler) throws LoginException
```

Log in to this provider.

 

 The provider relies on a `CallbackHandler`
 to obtain authentication information from the caller
 (a PIN, for example).  If the caller passes a `null`
 handler to this method, the provider uses the handler set in the
 `setCallbackHandler` method.
 If no handler was set in that method, the provider queries the
 auth.login.defaultCallbackHandler security property
 for the fully qualified class name of a default handler implementation.
 If the security property is not set,
 the provider is assumed to have alternative means
 for obtaining authentication information.

**参数**

- **subject** — the `Subject` which may contain principals/credentials used for authentication, or may be populated with additional principals/credentials after successful authentication has completed. This parameter may be `null`.
- **handler** — the `CallbackHandler` used by this provider to obtain authentication information from the caller, which may be `null`

**异常**

- **IllegalStateException** — if the provider requires configuration and `configure` has not been called
- **LoginException** — if the login operation fails
