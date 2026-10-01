---
id: "java-en-function-authprovider-setcallbackhandler"
language: "java"
lang: "en"
category: "function"
name: "AuthProvider.setCallbackHandler"
signature: "public abstract void setCallbackHandler(CallbackHandler handler)"
title: "AuthProvider.setCallbackHandler"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/AuthProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AuthProvider.setCallbackHandler

```java
public abstract void setCallbackHandler(CallbackHandler handler)
```

Set a `CallbackHandler`.

 

 The provider uses this handler if one is not passed to the
 `login` method.  The provider also uses this handler
 if it invokes `login` on behalf of callers.
 In either case if a handler is not set via this method,
 the provider queries the
 auth.login.defaultCallbackHandler security property
 for the fully qualified class name of a default handler implementation.
 If the security property is not set,
 the provider is assumed to have alternative means
 for obtaining authentication information.

**参数**

- **handler** — a `CallbackHandler` for obtaining authentication information, which may be `null`

**异常**

- **IllegalStateException** — if the provider requires configuration and `configure` has not been called
