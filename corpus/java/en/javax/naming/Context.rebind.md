---
id: "java-en-function-context-rebind"
language: "java"
lang: "en"
category: "function"
name: "Context.rebind"
signature: "public void rebind(Name name, Object obj) throws NamingException"
title: "Context.rebind"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Context.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Context.rebind

```java
public void rebind(Name name, Object obj) throws NamingException
```

Binds a name to an object, overwriting any existing binding.
 All intermediate contexts and the target context (that named by all
 but terminal atomic component of the name) must already exist.

 

 If the object is a `DirContext`, any existing attributes
 associated with the name are replaced with those of the object.
 Otherwise, any existing attributes associated with the name remain
 unchanged.

**参数**

- **name** — the name to bind; may not be empty
- **obj** — the object to bind; possibly null

**异常**

- **javax.naming.directory.InvalidAttributesException** — if object did not supply all mandatory attributes
- **NamingException** — if a naming exception is encountered

**参见**

- #rebind(String, Object)
- #bind(Name, Object)
- javax.naming.directory.DirContext#rebind(Name, Object, javax.naming.directory.Attributes)
- javax.naming.directory.DirContext
