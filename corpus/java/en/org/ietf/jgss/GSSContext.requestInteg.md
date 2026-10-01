---
id: "java-en-function-gsscontext-requestinteg"
language: "java"
lang: "en"
category: "function"
name: "GSSContext.requestInteg"
signature: "void requestInteg(boolean state) throws GSSException"
title: "GSSContext.requestInteg"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSContext.requestInteg

```java
void requestInteg(boolean state) throws GSSException
```

Requests that data integrity be enabled
 for the wrap and getMICmethods. This
 request can only be made on the context initiator's side, and it has
 to be done prior to the first call to initSecContext.

 Not all mechanisms support integrity and other mechanisms
 might enable it even if the application doesn't request
 it. The application may check to see if the request was honored with
 the `getIntegState() getIntegState` method.

 Disabling integrity will also automatically disable
 confidentiality.

**参数**

- **state** — a boolean value indicating whether integrity should be enabled or not.

**异常**

- **GSSException** — containing the following major error codes: `FAILURE GSSException.FAILURE`

**参见**

- #getIntegState()
