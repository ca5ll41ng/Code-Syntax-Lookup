---
id: "java-en-function-dircontext-add_attribute"
language: "java"
lang: "en"
category: "function"
name: "DirContext.ADD_ATTRIBUTE"
signature: "public static final int ADD_ATTRIBUTE = 1"
title: "DirContext.ADD_ATTRIBUTE"
directive: "field"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/DirContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DirContext.ADD_ATTRIBUTE

```java
public static final int ADD_ATTRIBUTE = 1
```

This constant specifies to add an attribute with the specified values.
 

 If attribute does not exist,
 create the attribute.  The resulting attribute has a union of the
 specified value set and the prior value set.
 Adding an attribute with no value will throw
 InvalidAttributeValueException if the attribute must have
 at least  one value.  For a single-valued attribute where that attribute
 already exists, throws AttributeInUseException.
 If attempting to add more than one value to a single-valued attribute,
 throws InvalidAttributeValueException.
 

 The value of this constant is `1`.

**参见**

- ModificationItem
- #modifyAttributes
