---
id: "java-en-function-dircontext-getschema"
language: "java"
lang: "en"
category: "function"
name: "DirContext.getSchema"
signature: "public DirContext getSchema(Name name) throws NamingException"
title: "DirContext.getSchema"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/DirContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DirContext.getSchema

```java
public DirContext getSchema(Name name) throws NamingException
```

Retrieves the schema associated with the named object.
 The schema describes rules regarding the structure of the namespace
 and the attributes stored within it.  The schema
 specifies what types of objects can be added to the directory and where
 they can be added; what mandatory and optional attributes an object
 can have. The range of support for schemas is directory-specific.

 

 This method returns the root of the schema information tree
 that is applicable to the named object. Several named objects
 (or even an entire directory) might share the same schema.

 

 Issues such as structure and contents of the schema tree,
 permission to modify to the contents of the schema
 tree, and the effect of such modifications on the directory
 are dependent on the underlying directory.

**参数**

- **name** — the name of the object whose schema is to be retrieved

**返回**

- the schema associated with the context; never null

**异常**

- **OperationNotSupportedException** — if schema not supported
- **NamingException** — if a naming exception is encountered
