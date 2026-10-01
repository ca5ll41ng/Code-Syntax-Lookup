---
id: "java-en-function-stackmapframeinfo-unsetfields"
language: "java"
lang: "en"
category: "function"
name: "StackMapFrameInfo.unsetFields"
signature: "List<NameAndTypeEntry> unsetFields()"
title: "StackMapFrameInfo.unsetFields"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/StackMapFrameInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackMapFrameInfo.unsetFields

```java
List<NameAndTypeEntry> unsetFields()
```

{@return the expanded unset fields}
 

 If this stack map frame is declared in a `class` file that does not
 depend on preview features, the list of unset fields is always empty.
 If the `class` file depends on preview features, this method
 returns the list of unset fields.

> *Since 28*
