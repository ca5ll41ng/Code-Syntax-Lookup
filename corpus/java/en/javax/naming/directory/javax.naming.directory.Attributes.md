---
id: "java-en-function-javax-naming-directory-attributes"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.directory.Attributes"
title: "Attributes"
directive: "type"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/Attributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attributes

This interface represents a collection of attributes.

 In a directory, named objects can have associated with them
 attributes.  The Attributes interface represents a collection of attributes.
 For example, you can request from the directory the attributes
 associated with an object.  Those attributes are returned in
 an object that implements the Attributes interface.

 Attributes in an object that implements the  Attributes interface are
 unordered. The object can have zero or more attributes.
 Attributes is either case-sensitive or case-insensitive (case-ignore).
 This property is determined at the time the Attributes object is
 created. (see BasicAttributes constructor for example).
 In a case-insensitive Attributes, the case of its attribute identifiers
 is ignored when searching for an attribute, or adding attributes.
 In a case-sensitive Attributes, the case is significant.

 Note that updates to Attributes (such as adding or removing an attribute)
 do not affect the corresponding representation in the directory.
 Updates to the directory can only be effected
 using operations in the DirContext interface.

**参见**

- DirContext#getAttributes
- DirContext#modifyAttributes
- DirContext#bind
- DirContext#rebind
- DirContext#createSubcontext
- DirContext#search
- BasicAttributes

> *Since 1.3*
