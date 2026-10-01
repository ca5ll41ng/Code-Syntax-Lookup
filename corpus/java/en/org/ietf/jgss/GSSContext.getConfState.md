---
id: "java-en-function-gsscontext-getconfstate"
language: "java"
lang: "en"
category: "function"
name: "GSSContext.getConfState"
signature: "boolean getConfState()"
title: "GSSContext.getConfState"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSContext.getConfState

```java
boolean getConfState()
```

Determines if data confidentiality is available
 over the context. This method can be called by both the context
 initiator and the context acceptor, but only after one of `isProtReady() isProtReady` or `isEstablished()
 isEstablished` return true. If this method returns
 true, so will `getIntegState()
 getIntegState`

**返回**

- true if confidentiality services are available, false otherwise.

**参见**

- #requestConf(boolean)
