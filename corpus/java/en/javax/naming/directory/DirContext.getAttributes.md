---
id: "java-en-function-dircontext-getattributes"
language: "java"
lang: "en"
category: "function"
name: "DirContext.getAttributes"
signature: "public Attributes getAttributes(Name name) throws NamingException"
title: "DirContext.getAttributes"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/DirContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DirContext.getAttributes

```java
public Attributes getAttributes(Name name) throws NamingException
```

Retrieves all of the attributes associated with a named object.
 See the class description regarding attribute models, attribute
 type names, and operational attributes.

**参数**

- **name** — the name of the object from which to retrieve attributes

**返回**

- the set of attributes associated with name. Returns an empty attribute set if name has no attributes; never null.

**异常**

- **NamingException** — if a naming exception is encountered

**参见**

- #getAttributes(String)
- #getAttributes(Name, String[])
