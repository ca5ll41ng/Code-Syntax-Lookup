---
id: "java-en-function-dircontext-remove_attribute"
language: "java"
lang: "en"
category: "function"
name: "DirContext.REMOVE_ATTRIBUTE"
signature: "public static final int REMOVE_ATTRIBUTE = 3"
title: "DirContext.REMOVE_ATTRIBUTE"
directive: "field"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/DirContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DirContext.REMOVE_ATTRIBUTE

```java
public static final int REMOVE_ATTRIBUTE = 3
```

This constant specifies to delete
 the specified attribute values from the attribute.

 The resulting attribute has the set difference of its prior value set
 and the specified value set.
 If no values are specified, deletes the entire attribute.
 If the attribute does not exist, or if some or all members of the
 specified value set do not exist, this absence may be ignored
 and the operation succeeds, or a NamingException may be thrown to
 indicate the absence.
 Removal of the last value will remove the attribute if the
 attribute is required to have at least one value.
 

 The value of this constant is `3`.

**参见**

- ModificationItem
- #modifyAttributes
