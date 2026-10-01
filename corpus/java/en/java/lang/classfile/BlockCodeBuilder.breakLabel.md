---
id: "java-en-function-blockcodebuilder-breaklabel"
language: "java"
lang: "en"
category: "function"
name: "BlockCodeBuilder.breakLabel"
signature: "Label breakLabel()"
title: "BlockCodeBuilder.breakLabel"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BlockCodeBuilder.breakLabel

```java
Label breakLabel()
```

{@return the label locating where control is passed back to the
 parent block}  A branch to this label "break"'s out of the current
 block.
 

 If the last instruction in this block does not lead to the break
 label, Class-File API may append instructions to target the "break"
 label to the built block.
