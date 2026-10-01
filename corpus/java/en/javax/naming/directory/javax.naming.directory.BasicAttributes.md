---
id: "java-en-function-javax-naming-directory-basicattributes"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.directory.BasicAttributes"
title: "BasicAttributes"
directive: "type"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/BasicAttributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BasicAttributes

This class provides a basic implementation
 of the Attributes interface.

 BasicAttributes is either case-sensitive or case-insensitive (case-ignore).
 This property is determined at the time the BasicAttributes constructor
 is called.
 In a case-insensitive BasicAttributes, the case of its attribute identifiers
 is ignored when searching for an attribute, or adding attributes.
 In a case-sensitive BasicAttributes, the case is significant.

 When the BasicAttributes class needs to create an Attribute, it
 uses BasicAttribute. There is no other dependency on BasicAttribute.

 Note that updates to BasicAttributes (such as adding or removing an attribute)
 does not affect the corresponding representation in the directory.
 Updates to the directory can only be effected
 using operations in the DirContext interface.

 A BasicAttributes instance is not synchronized against concurrent
 multithreaded access. Multiple threads trying to access and modify
 a single BasicAttributes instance should lock the object.

**参见**

- DirContext#getAttributes
- DirContext#modifyAttributes
- DirContext#bind
- DirContext#rebind
- DirContext#createSubcontext
- DirContext#search

> *Since 1.3*
