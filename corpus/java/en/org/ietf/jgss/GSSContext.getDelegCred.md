---
id: "java-en-function-gsscontext-getdelegcred"
language: "java"
lang: "en"
category: "function"
name: "GSSContext.getDelegCred"
signature: "GSSCredential getDelegCred() throws GSSException"
title: "GSSContext.getDelegCred"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSContext.getDelegCred

```java
GSSCredential getDelegCred() throws GSSException
```

Obtains the credentials delegated by the context
 initiator to the context acceptor. It should be called only on the
 context acceptor's side, and once the context is fully
 established. The caller can use the method `getCredDelegState() getCredDelegState` to determine if there are
 any delegated credentials.

**返回**

- a GSSCredential containing the initiator's delegated credentials, or null is no credentials were delegated.

**异常**

- **GSSException** — containing the following major error codes: `FAILURE GSSException.FAILURE`
