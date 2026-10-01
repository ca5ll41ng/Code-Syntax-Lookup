---
id: "java-en-function-attributemodificationexception-setunexecutedmodifications"
language: "java"
lang: "en"
category: "function"
name: "AttributeModificationException.setUnexecutedModifications"
signature: "public void setUnexecutedModifications(ModificationItem[] e)"
title: "AttributeModificationException.setUnexecutedModifications"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/AttributeModificationException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributeModificationException.setUnexecutedModifications

```java
public void setUnexecutedModifications(ModificationItem[] e)
```

Sets the unexecuted modification list to be e.
 Items in the list must appear in the same order in which they were
 originally supplied in DirContext.modifyAttributes().
 The first item in the list is the first one that was not executed.
 If this list is null, none of the operations originally submitted
 to modifyAttributes() were executed.

**参数**

- **e** — The possibly null list of unexecuted modifications.

**参见**

- #getUnexecutedModifications
