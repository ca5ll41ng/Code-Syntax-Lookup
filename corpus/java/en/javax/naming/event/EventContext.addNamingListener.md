---
id: "java-en-function-eventcontext-addnaminglistener"
language: "java"
lang: "en"
category: "function"
name: "EventContext.addNamingListener"
signature: "void addNamingListener(Name target, int scope, NamingListener l) throws NamingException"
title: "EventContext.addNamingListener"
directive: "method"
module: "java.naming/javax.naming.event"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/event/EventContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EventContext.addNamingListener

```java
void addNamingListener(Name target, int scope, NamingListener l) throws NamingException
```

Adds a listener for receiving naming events fired
 when the object(s) identified by a target and scope changes.

 The event source of those events is this context. See the
 class description for a discussion on event source and target.
 See the descriptions of the constants `OBJECT_SCOPE`,
 `ONELEVEL_SCOPE`, and `SUBTREE_SCOPE` to see how
 `scope` affects the registration.

 `target` needs to name a context only when `scope` is
 `ONELEVEL_SCOPE`.
 `target` may name a non-context if `scope` is either
 `OBJECT_SCOPE` or `SUBTREE_SCOPE`.  Using
 `SUBTREE_SCOPE` for a non-context might be useful,
 for example, if the caller does not know in advance whether `target`
 is a context and just wants to register interest in the (possibly
 degenerate subtree) rooted at `target`.

 When the listener is notified of an event, the listener may
 in invoked in a thread other than the one in which
 `addNamingListener()` is executed.
 Care must be taken when multiple threads are accessing the same
 `EventContext` concurrently.
 See the
 package description
 for more information on threading issues.

**参数**

- **target** — A nonnull name to be resolved relative to this context.
- **scope** — One of `OBJECT_SCOPE`, `ONELEVEL_SCOPE`, or `SUBTREE_SCOPE`.
- **l** — The nonnull listener.

**异常**

- **NamingException** — If a problem was encountered while adding the listener.

**参见**

- #removeNamingListener
