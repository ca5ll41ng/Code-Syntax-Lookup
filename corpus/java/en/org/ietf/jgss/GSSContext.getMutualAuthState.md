---
id: "java-en-function-gsscontext-getmutualauthstate"
language: "java"
lang: "en"
category: "function"
name: "GSSContext.getMutualAuthState"
signature: "boolean getMutualAuthState()"
title: "GSSContext.getMutualAuthState"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSContext.getMutualAuthState

```java
boolean getMutualAuthState()
```

Determines if mutual authentication is enabled on
 this context. It can be called by both the context initiator and the
 context acceptor. For a definitive answer this method must be
 called only after context establishment is complete. An initiator
 that requests mutual authentication can call this method after
 context completion and dispose the context if its request was not
 honored.

**返回**

- true if mutual authentication is enabled, false otherwise.

**参见**

- #requestMutualAuth(boolean)
