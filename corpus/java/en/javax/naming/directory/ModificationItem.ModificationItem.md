---
id: "java-en-function-modificationitem-modificationitem"
language: "java"
lang: "en"
category: "function"
name: "ModificationItem.ModificationItem"
signature: "public ModificationItem(int mod_op, Attribute attr)"
title: "ModificationItem.ModificationItem"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/ModificationItem.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModificationItem.ModificationItem

```java
public ModificationItem(int mod_op, Attribute attr)
```

Creates a new instance of ModificationItem.

**参数**

- **mod_op** — Modification to apply.  It must be one of: DirContext.ADD_ATTRIBUTE DirContext.REPLACE_ATTRIBUTE DirContext.REMOVE_ATTRIBUTE
- **attr** — The non-null attribute to use for modification.

**异常**

- **IllegalArgumentException** — If attr is null, or if mod_op is not one of the ones specified above.
