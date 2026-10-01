---
id: "java-en-function-dircontext-modifyattributes"
language: "java"
lang: "en"
category: "function"
name: "DirContext.modifyAttributes"
signature: "public void modifyAttributes(Name name, int mod_op, Attributes attrs) throws NamingException"
title: "DirContext.modifyAttributes"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/DirContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DirContext.modifyAttributes

```java
public void modifyAttributes(Name name, int mod_op, Attributes attrs) throws NamingException
```

Modifies the attributes associated with a named object.
 The order of the modifications is not specified.  Where
 possible, the modifications are performed atomically.

**参数**

- **name** — the name of the object whose attributes will be updated
- **mod_op** — the modification operation, one of: ADD_ATTRIBUTE, REPLACE_ATTRIBUTE, REMOVE_ATTRIBUTE.
- **attrs** — the attributes to be used for the modification; may not be null

**异常**

- **AttributeModificationException** — if the modification cannot be completed successfully
- **NamingException** — if a naming exception is encountered

**参见**

- #modifyAttributes(Name, ModificationItem[])
