---
id: "java-en-function-gsscontext-requestcreddeleg"
language: "java"
lang: "en"
category: "function"
name: "GSSContext.requestCredDeleg"
signature: "void requestCredDeleg(boolean state) throws GSSException"
title: "GSSContext.requestCredDeleg"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSContext.requestCredDeleg

```java
void requestCredDeleg(boolean state) throws GSSException
```

Requests that the initiator's credentials be
 delegated to the acceptor during context establishment. This
 request can only be made on the context initiator's side, and it has
 to be done prior to the first call to
 initSecContext.

 Not all mechanisms support credential delegation. Therefore, an
 application that desires delegation should check to see if the
 request was honored with the `getCredDelegState()
 getCredDelegState` method. If the application indicates that
 delegation must not be used, then the mechanism will honor the
 request and delegation will not occur. This is an exception
 to the general rule that a mechanism may enable a service even if it
 is not requested.

**参数**

- **state** — a boolean value indicating whether the credentials should be delegated or not.

**异常**

- **GSSException** — containing the following major error codes: `FAILURE GSSException.FAILURE`

**参见**

- #getCredDelegState()
