---
id: "java-en-function-dircontext-rebind"
language: "java"
lang: "en"
category: "function"
name: "DirContext.rebind"
signature: "public void rebind(Name name, Object obj, Attributes attrs) throws NamingException"
title: "DirContext.rebind"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/DirContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DirContext.rebind

```java
public void rebind(Name name, Object obj, Attributes attrs) throws NamingException
```

Binds a name to an object, along with associated attributes,
 overwriting any existing binding.
 If `attrs` is null and `obj` is a `DirContext`,
 the attributes from `obj` are used.
 If `attrs` is null and `obj` is not a `DirContext`,
 any existing attributes associated with the object already bound
 in the directory remain unchanged.
 If `attrs` is non-null, any existing attributes associated with
 the object already bound in the directory are removed and `attrs`
 is associated with the named object.  If `obj` is a
 `DirContext` and `attrs` is non-null, the attributes
 of `obj` are ignored.

**参数**

- **name** — the name to bind; may not be empty
- **obj** — the object to bind; possibly null
- **attrs** — the attributes to associate with the binding

**异常**

- **InvalidAttributesException** — if some "mandatory" attributes of the binding are not supplied
- **NamingException** — if a naming exception is encountered

**参见**

- Context#bind(Name, Object)
- #bind(Name, Object, Attributes)
