---
id: "java-en-function-gsscontext-isinitiator"
language: "java"
lang: "en"
category: "function"
name: "GSSContext.isInitiator"
signature: "boolean isInitiator() throws GSSException"
title: "GSSContext.isInitiator"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSContext.isInitiator

```java
boolean isInitiator() throws GSSException
```

Determines if this is the context initiator. This
 can be called on both the context initiator's and context acceptor's
 side.

**返回**

- true if this is the context initiator, false if it is the context acceptor.

**异常**

- **GSSException** — containing the following major error codes: `FAILURE GSSException.FAILURE`
