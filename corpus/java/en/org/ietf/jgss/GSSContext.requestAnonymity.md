---
id: "java-en-function-gsscontext-requestanonymity"
language: "java"
lang: "en"
category: "function"
name: "GSSContext.requestAnonymity"
signature: "void requestAnonymity(boolean state) throws GSSException"
title: "GSSContext.requestAnonymity"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSContext.requestAnonymity

```java
void requestAnonymity(boolean state) throws GSSException
```

Requests that the initiator's identity not be
 disclosed to the acceptor. This request can only be made on the
 context initiator's side, and it has to be done prior to the first
 call to initSecContext.

 Not all mechanisms support anonymity for the initiator. Therefore, the
 application should check to see if the request was honored with the
 `getAnonymityState() getAnonymityState` method.

**参数**

- **state** — a boolean value indicating if the initiator should be authenticated to the acceptor as an anonymous principal.

**异常**

- **GSSException** — containing the following major error codes: `FAILURE GSSException.FAILURE`

**参见**

- #getAnonymityState
