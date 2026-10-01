---
id: "java-en-function-gsscontext-getintegstate"
language: "java"
lang: "en"
category: "function"
name: "GSSContext.getIntegState"
signature: "boolean getIntegState()"
title: "GSSContext.getIntegState"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSContext.getIntegState

```java
boolean getIntegState()
```

Determines if data integrity is available
 over the context. This method can be called by both the context
 initiator and the context acceptor, but only after one of `isProtReady() isProtReady` or `isEstablished()
 isEstablished` return true. This method will always
 return true if `getConfState() getConfState`
 returns true.

**返回**

- true if integrity services are available, false otherwise.

**参见**

- #requestInteg(boolean)
