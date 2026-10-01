---
id: "java-en-function-authorizecallback-isauthorized"
language: "java"
lang: "en"
category: "function"
name: "AuthorizeCallback.isAuthorized"
signature: "public boolean isAuthorized()"
title: "AuthorizeCallback.isAuthorized"
directive: "method"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/AuthorizeCallback.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AuthorizeCallback.isAuthorized

```java
public boolean isAuthorized()
```

Determines whether the authentication id is allowed to
 act on behalf of the authorization id.

**返回**

- `true` if authorization is allowed; `false` otherwise

**参见**

- #setAuthorized(boolean)
- #getAuthorizedID()
