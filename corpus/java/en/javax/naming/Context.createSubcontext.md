---
id: "java-en-function-context-createsubcontext"
language: "java"
lang: "en"
category: "function"
name: "Context.createSubcontext"
signature: "public Context createSubcontext(Name name) throws NamingException"
title: "Context.createSubcontext"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Context.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Context.createSubcontext

```java
public Context createSubcontext(Name name) throws NamingException
```

Creates and binds a new context.
 Creates a new context with the given name and binds it in
 the target context (that named by all but terminal atomic
 component of the name).  All intermediate contexts and the
 target context must already exist.

**参数**

- **name** — the name of the context to create; may not be empty

**返回**

- the newly created context

**异常**

- **NameAlreadyBoundException** — if name is already bound
- **javax.naming.directory.InvalidAttributesException** — if creation of the subcontext requires specification of mandatory attributes
- **NamingException** — if a naming exception is encountered

**参见**

- #createSubcontext(String)
- javax.naming.directory.DirContext#createSubcontext
