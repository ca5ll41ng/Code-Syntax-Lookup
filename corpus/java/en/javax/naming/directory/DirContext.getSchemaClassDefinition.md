---
id: "java-en-function-dircontext-getschemaclassdefinition"
language: "java"
lang: "en"
category: "function"
name: "DirContext.getSchemaClassDefinition"
signature: "public DirContext getSchemaClassDefinition(Name name) throws NamingException"
title: "DirContext.getSchemaClassDefinition"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/DirContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DirContext.getSchemaClassDefinition

```java
public DirContext getSchemaClassDefinition(Name name) throws NamingException
```

Retrieves a context containing the schema objects of the
 named object's class definitions.

 One category of information found in directory schemas is
 class definitions.  An "object class" definition
 specifies the object's type and what attributes (mandatory
 and optional) the object must/can have. Note that the term
 "object class" being referred to here is in the directory sense
 rather than in the Java sense.
 For example, if the named object is a directory object of
 "Person" class, `getSchemaClassDefinition()` would return a
 `DirContext` representing the (directory's) object class
 definition of "Person".

 The information that can be retrieved from an object class definition
 is directory-dependent.

 Prior to JNDI 1.2, this method
 returned a single schema object representing the class definition of
 the named object.
 Since JNDI 1.2, this method returns a `DirContext` containing
 all of the named object's class definitions.

**参数**

- **name** — the name of the object whose object class definition is to be retrieved

**返回**

- the `DirContext` containing the named object's class definitions; never null

**异常**

- **OperationNotSupportedException** — if schema not supported
- **NamingException** — if a naming exception is encountered
