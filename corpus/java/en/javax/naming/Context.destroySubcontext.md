---
id: "java-en-function-context-destroysubcontext"
language: "java"
lang: "en"
category: "function"
name: "Context.destroySubcontext"
signature: "public void destroySubcontext(Name name) throws NamingException"
title: "Context.destroySubcontext"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Context.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Context.destroySubcontext

```java
public void destroySubcontext(Name name) throws NamingException
```

Destroys the named context and removes it from the namespace.
 Any attributes associated with the name are also removed.
 Intermediate contexts are not destroyed.

 

 This method is idempotent.
 It succeeds even if the terminal atomic name
 is not bound in the target context, but throws
 `NameNotFoundException`
 if any of the intermediate contexts do not exist.

 

 In a federated naming system, a context from one naming system
 may be bound to a name in another.  One can subsequently
 look up and perform operations on the foreign context using a
 composite name.  However, an attempt destroy the context using
 this composite name will fail with
 `NotContextException`, because the foreign context is not
 a "subcontext" of the context in which it is bound.
 Instead, use `unbind()` to remove the
 binding of the foreign context.  Destroying the foreign context
 requires that the `destroySubcontext()` be performed
 on a context from the foreign context's "native" naming system.

**参数**

- **name** — the name of the context to be destroyed; may not be empty

**异常**

- **NameNotFoundException** — if an intermediate context does not exist
- **NotContextException** — if the name is bound but does not name a context, or does not name a context of the appropriate type
- **ContextNotEmptyException** — if the named context is not empty
- **NamingException** — if a naming exception is encountered

**参见**

- #destroySubcontext(String)
