---
id: "java-en-function-gsscontext-getanonymitystate"
language: "java"
lang: "en"
category: "function"
name: "GSSContext.getAnonymityState"
signature: "boolean getAnonymityState()"
title: "GSSContext.getAnonymityState"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSContext.getAnonymityState

```java
boolean getAnonymityState()
```

Determines if the context initiator is
 anonymously authenticated to the context acceptor. It can be called by
 both the context initiator and the context acceptor, and at any
 time. **On the initiator side, a call to this method determines
 if the identity of the initiator has been disclosed in any of the
 context establishment tokens that might have been generated thus far
 by initSecContext. An initiator that absolutely must be
 authenticated anonymously should call this method after each call to
 initSecContext to determine if the generated token
 should be sent to the peer or the context aborted.** On the
 acceptor side, a call to this method determines if any of the tokens
 processed by acceptSecContext thus far have divulged
 the identity of the initiator.

**返回**

- true if the context initiator is still anonymous, false otherwise.

**参见**

- #requestAnonymity(boolean)
