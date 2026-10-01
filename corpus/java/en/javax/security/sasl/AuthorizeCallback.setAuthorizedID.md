---
id: "java-en-function-authorizecallback-setauthorizedid"
language: "java"
lang: "en"
category: "function"
name: "AuthorizeCallback.setAuthorizedID"
signature: "public void setAuthorizedID(String id)"
title: "AuthorizeCallback.setAuthorizedID"
directive: "method"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/AuthorizeCallback.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AuthorizeCallback.setAuthorizedID

```java
public void setAuthorizedID(String id)
```

Sets the id of the authorized entity. Called by handler only when the id
 is different from getAuthorizationID(). For example, the id
 might need to be canonicalized for the environment in which it
 will be used.

**参数**

- **id** — The id of the authorized user.

**参见**

- #setAuthorized(boolean)
- #getAuthorizedID
