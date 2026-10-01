---
id: "java-en-function-gsscontext-getreplaydetstate"
language: "java"
lang: "en"
category: "function"
name: "GSSContext.getReplayDetState"
signature: "boolean getReplayDetState()"
title: "GSSContext.getReplayDetState"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSContext.getReplayDetState

```java
boolean getReplayDetState()
```

Determines if replay detection is enabled for the
 per-message security services from this context. It can be called by
 both the context initiator and the context acceptor. For a
 definitive answer this method must be called only after context
 establishment is complete. An initiator that requests replay
 detection can call this method after context completion and
 dispose the context if its request was not honored.

**返回**

- true if replay detection is enabled, false otherwise.

**参见**

- #requestReplayDet(boolean)
