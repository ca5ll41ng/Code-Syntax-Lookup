---
id: "java-en-function-gsscontext-getmech"
language: "java"
lang: "en"
category: "function"
name: "GSSContext.getMech"
signature: "Oid getMech() throws GSSException"
title: "GSSContext.getMech"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSContext.getMech

```java
Oid getMech() throws GSSException
```

Determines what mechanism is being used for this
 context. This method may be called before the context is fully
 established, but the mechanism returned may change on successive
 calls in the negotiated mechanism case.

**返回**

- the Oid of the mechanism being used

**异常**

- **GSSException** — containing the following major error codes: `FAILURE GSSException.FAILURE`
