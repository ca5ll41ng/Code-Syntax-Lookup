---
id: "java-en-function-attributemodificationexception-getunexecutedmodifications"
language: "java"
lang: "en"
category: "function"
name: "AttributeModificationException.getUnexecutedModifications"
signature: "public ModificationItem[] getUnexecutedModifications()"
title: "AttributeModificationException.getUnexecutedModifications"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/AttributeModificationException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributeModificationException.getUnexecutedModifications

```java
public ModificationItem[] getUnexecutedModifications()
```

Retrieves the unexecuted modification list.
 Items in the list appear in the same order in which they were
 originally supplied in DirContext.modifyAttributes().
 The first item in the list is the first one that was not executed.
 If this list is null, none of the operations originally submitted
 to modifyAttributes() were executed.

**返回**

- The possibly null unexecuted modification list.

**参见**

- #setUnexecutedModifications
