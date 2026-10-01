---
id: "java-en-function-logincontext-logincontext"
language: "java"
lang: "en"
category: "function"
name: "LoginContext.LoginContext"
signature: "public LoginContext(String name) throws LoginException"
title: "LoginContext.LoginContext"
directive: "method"
module: "java.base/javax.security.auth.login"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/login/LoginContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LoginContext.LoginContext

```java
public LoginContext(String name) throws LoginException
```

Instantiate a new `LoginContext` object with a name.

**参数**

- **name** — the name used as the index into the `Configuration`.

**异常**

- **LoginException** — if the caller-specified `name` does not appear in the `Configuration` and there is no `Configuration` entry for "`other`", or if the `auth.login.defaultCallbackHandler` security property was set, but the implementation class could not be loaded.
