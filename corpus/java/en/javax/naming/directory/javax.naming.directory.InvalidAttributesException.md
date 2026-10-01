---
id: "java-en-function-javax-naming-directory-invalidattributesexception"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.directory.InvalidAttributesException"
title: "InvalidAttributesException"
directive: "type"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/InvalidAttributesException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InvalidAttributesException

This exception is thrown when an attempt is
 made to add or modify an attribute set that has been specified
 incompletely or incorrectly. This could happen, for example,
 when attempting to add or modify a binding, or to create a new
 subcontext without specifying all the mandatory attributes
 required for creation of the object.  Another situation in
 which this exception is thrown is by specification of incompatible
 attributes within the same attribute set, or attributes in conflict
 with that specified by the object's schema.
 

 Synchronization and serialization issues that apply to NamingException
 apply directly here.

> *Since 1.3*
