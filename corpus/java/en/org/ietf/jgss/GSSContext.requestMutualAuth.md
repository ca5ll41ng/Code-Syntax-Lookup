---
id: "java-en-function-gsscontext-requestmutualauth"
language: "java"
lang: "en"
category: "function"
name: "GSSContext.requestMutualAuth"
signature: "void requestMutualAuth(boolean state) throws GSSException"
title: "GSSContext.requestMutualAuth"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSContext.requestMutualAuth

```java
void requestMutualAuth(boolean state) throws GSSException
```

Requests that mutual authentication be done during
 context establishment. This request can only be made on the context
 initiator's side, and it has to be done prior to the first call to
 initSecContext.

 Not all mechanisms support mutual authentication and some mechanisms
 might require mutual authentication even if the application
 doesn't. Therefore, the application should check to see if the
 request was honored with the `getMutualAuthState()
 getMutualAuthState` method.

**参数**

- **state** — a boolean value indicating whether mutual authentication should be used or not.

**异常**

- **GSSException** — containing the following major error codes: `FAILURE GSSException.FAILURE`

**参见**

- #getMutualAuthState()
