---
id: "java-en-function-dircontext-createsubcontext"
language: "java"
lang: "en"
category: "function"
name: "DirContext.createSubcontext"
signature: "public DirContext createSubcontext(Name name, Attributes attrs) throws NamingException"
title: "DirContext.createSubcontext"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/DirContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DirContext.createSubcontext

```java
public DirContext createSubcontext(Name name, Attributes attrs) throws NamingException
```

Creates and binds a new context, along with associated attributes.
 This method creates a new subcontext with the given name, binds it in
 the target context (that named by all but terminal atomic
 component of the name), and associates the supplied attributes
 with the newly created object.
 All intermediate and target contexts must already exist.
 If `attrs` is null, this method is equivalent to
 `Context.createSubcontext()`.

**参数**

- **name** — the name of the context to create; may not be empty
- **attrs** — the attributes to associate with the newly created context

**返回**

- the newly created context

**异常**

- **NameAlreadyBoundException** — if the name is already bound
- **InvalidAttributesException** — if attrs does not contain all the mandatory attributes required for creation
- **NamingException** — if a naming exception is encountered

**参见**

- Context#createSubcontext(Name)
