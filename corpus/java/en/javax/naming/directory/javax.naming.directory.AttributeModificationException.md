---
id: "java-en-function-javax-naming-directory-attributemodificationexception"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.directory.AttributeModificationException"
title: "AttributeModificationException"
directive: "type"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/AttributeModificationException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributeModificationException

This exception is thrown when an attempt is
 made to add, or remove, or modify an attribute, its identifier,
 or its values that conflicts with the attribute's (schema) definition
 or the attribute's state.
 It is thrown in response to DirContext.modifyAttributes().
 It contains a list of modifications that have not been performed, in the
 order that they were supplied to modifyAttributes().
 If the list is null, none of the modifications were performed successfully.

 An AttributeModificationException instance is not synchronized
 against concurrent multithreaded access. Multiple threads trying
 to access and modify a single AttributeModification instance
 should lock the object.

**参见**

- DirContext#modifyAttributes

> *Since 1.3*
