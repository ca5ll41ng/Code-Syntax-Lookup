---
id: "java-en-function-dircontext-replace_attribute"
language: "java"
lang: "en"
category: "function"
name: "DirContext.REPLACE_ATTRIBUTE"
signature: "public static final int REPLACE_ATTRIBUTE = 2"
title: "DirContext.REPLACE_ATTRIBUTE"
directive: "field"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/DirContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DirContext.REPLACE_ATTRIBUTE

```java
public static final int REPLACE_ATTRIBUTE = 2
```

This constant specifies to replace an attribute with specified values.

 If attribute already exists,
 replaces all existing values with new specified values.  If the
 attribute does not exist, creates it.  If no value is specified,
 deletes all the values of the attribute.
 Removal of the last value will remove the attribute if the attribute
 is required to have at least one value.  If
 attempting to add more than one value to a single-valued attribute,
 throws InvalidAttributeValueException.
 

 The value of this constant is `2`.

**参见**

- ModificationItem
- #modifyAttributes
