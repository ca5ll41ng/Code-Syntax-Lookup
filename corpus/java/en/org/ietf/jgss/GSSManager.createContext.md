---
id: "java-en-function-gssmanager-createcontext"
language: "java"
lang: "en"
category: "function"
name: "GSSManager.createContext"
signature: "public abstract GSSContext createContext(GSSName peer, Oid mech, GSSCredential myCred, int lifetime) throws GSSException"
title: "GSSManager.createContext"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSManager.createContext

```java
public abstract GSSContext createContext(GSSName peer, Oid mech, GSSCredential myCred, int lifetime) throws GSSException
```

Factory method for creating a context on the initiator's
 side.

 Non-default values for lifetime cannot always be honored by the
 underlying mechanism, thus applications should be prepared to call
 `getLifetime() getLifetime` on the returned
 context.

**参数**

- **peer** — the name of the target peer.
- **mech** — the Oid of the desired mechanism.  Use null to request the default mechanism.
- **myCred** — the credentials of the initiator.  Use null to act as the default initiator principal.
- **lifetime** — the lifetime, in seconds, requested for the context. Use `INDEFINITE_LIFETIME GSSContext.INDEFINITE_LIFETIME` to request that the context have the maximum permitted lifetime. Use `DEFAULT_LIFETIME GSSContext.DEFAULT_LIFETIME` to request a default lifetime for the context.

**返回**

- an unestablished GSSContext

**异常**

- **GSSException** — containing the following major error codes: `NO_CRED GSSException.NO_CRED` `CREDENTIALS_EXPIRED GSSException.CREDENTIALS_EXPIRED` `BAD_NAMETYPE GSSException.BAD_NAMETYPE` `BAD_MECH GSSException.BAD_MECH` `FAILURE GSSException.FAILURE`

**参见**

- GSSContext
