---
id: "java-en-function-gsscontext-requestlifetime"
language: "java"
lang: "en"
category: "function"
name: "GSSContext.requestLifetime"
signature: "void requestLifetime(int lifetime) throws GSSException"
title: "GSSContext.requestLifetime"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSContext.requestLifetime

```java
void requestLifetime(int lifetime) throws GSSException
```

Requests a lifetime in seconds for the
 context. This method can only be called on the context initiator's
 side, and it has to be done prior to the first call to
 initSecContext.

 The actual lifetime of the context will depend on the capabilities of
 the underlying mechanism and the application should call the `getLifetime() getLifetime` method to determine this.

**参数**

- **lifetime** — the desired context lifetime in seconds. Use INDEFINITE_LIFETIME to request an indefinite lifetime and DEFAULT_LIFETIME to request a default lifetime.

**异常**

- **GSSException** — containing the following major error codes: `FAILURE GSSException.FAILURE`

**参见**

- #getLifetime()
