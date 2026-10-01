---
id: "java-en-function-dircontext-bind"
language: "java"
lang: "en"
category: "function"
name: "DirContext.bind"
signature: "public void bind(Name name, Object obj, Attributes attrs) throws NamingException"
title: "DirContext.bind"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/DirContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DirContext.bind

```java
public void bind(Name name, Object obj, Attributes attrs) throws NamingException
```

Binds a name to an object, along with associated attributes.
 If `attrs` is null, the resulting binding will have
 the attributes associated with `obj` if `obj` is a
 `DirContext`, and no attributes otherwise.
 If `attrs` is non-null, the resulting binding will have
 `attrs` as its attributes; any attributes associated with
 `obj` are ignored.

**参数**

- **name** — the name to bind; may not be empty
- **obj** — the object to bind; possibly null
- **attrs** — the attributes to associate with the binding

**异常**

- **NameAlreadyBoundException** — if name is already bound
- **InvalidAttributesException** — if some "mandatory" attributes of the binding are not supplied
- **NamingException** — if a naming exception is encountered

**参见**

- Context#bind(Name, Object)
- #rebind(Name, Object, Attributes)
