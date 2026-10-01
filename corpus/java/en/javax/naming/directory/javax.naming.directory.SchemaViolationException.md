---
id: "java-en-function-javax-naming-directory-schemaviolationexception"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.directory.SchemaViolationException"
title: "SchemaViolationException"
directive: "type"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/SchemaViolationException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SchemaViolationException

This exception is thrown when a method
 in some ways violates the schema. An example of schema violation
 is modifying attributes of an object that violates the object's
 schema definition. Another example is renaming or moving an object
 to a part of the namespace that violates the namespace's
 schema definition.
 

 Synchronization and serialization issues that apply to NamingException
 apply directly here.

**参见**

- javax.naming.Context#bind
- DirContext#bind
- javax.naming.Context#rebind
- DirContext#rebind
- DirContext#createSubcontext
- javax.naming.Context#createSubcontext
- DirContext#modifyAttributes

> *Since 1.3*
