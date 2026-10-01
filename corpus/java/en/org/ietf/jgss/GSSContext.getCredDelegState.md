---
id: "java-en-function-gsscontext-getcreddelegstate"
language: "java"
lang: "en"
category: "function"
name: "GSSContext.getCredDelegState"
signature: "boolean getCredDelegState()"
title: "GSSContext.getCredDelegState"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSContext.getCredDelegState

```java
boolean getCredDelegState()
```

Determines if credential delegation is enabled on
 this context. It can be called by both the context initiator and the
 context acceptor. For a definitive answer this method must be
 called only after context establishment is complete. Note that if an
 initiator requests that delegation not be allowed the `requestCredDeleg(boolean) requestCredDeleg` method will honor that
 request and this method will return false on the
 initiator's side from that point onwards.

**返回**

- true if delegation is enabled, false otherwise.

**参见**

- #requestCredDeleg(boolean)
