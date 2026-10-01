---
id: "java-en-function-context-list"
language: "java"
lang: "en"
category: "function"
name: "Context.list"
signature: "public NamingEnumeration<NameClassPair> list(Name name) throws NamingException"
title: "Context.list"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Context.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Context.list

```java
public NamingEnumeration<NameClassPair> list(Name name) throws NamingException
```

Enumerates the names bound in the named context, along with the
 class names of objects bound to them.
 The contents of any subcontexts are not included.

 

 If a binding is added to or removed from this context,
 its effect on an enumeration previously returned is undefined.

**参数**

- **name** — the name of the context to list

**返回**

- an enumeration of the names and class names of the bindings in this context.  Each element of the enumeration is of type `NameClassPair`.

**异常**

- **NamingException** — if a naming exception is encountered

**参见**

- #list(String)
- #listBindings(Name)
- NameClassPair
