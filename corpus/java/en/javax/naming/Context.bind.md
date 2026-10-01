---
id: "java-en-function-context-bind"
language: "java"
lang: "en"
category: "function"
name: "Context.bind"
signature: "public void bind(Name name, Object obj) throws NamingException"
title: "Context.bind"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Context.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Context.bind

```java
public void bind(Name name, Object obj) throws NamingException
```

Binds a name to an object.
 All intermediate contexts and the target context (that named by all
 but terminal atomic component of the name) must already exist.

**参数**

- **name** — the name to bind; may not be empty
- **obj** — the object to bind; possibly null

**异常**

- **NameAlreadyBoundException** — if name is already bound
- **javax.naming.directory.InvalidAttributesException** — if object did not supply all mandatory attributes
- **NamingException** — if a naming exception is encountered

**参见**

- #bind(String, Object)
- #rebind(Name, Object)
- javax.naming.directory.DirContext#bind(Name, Object, javax.naming.directory.Attributes)
