---
id: "java-en-function-typekind-slotsize"
language: "java"
lang: "en"
category: "function"
name: "TypeKind.slotSize"
signature: "public int slotSize()"
title: "TypeKind.slotSize"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/TypeKind.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TypeKind.slotSize

```java
public int slotSize()
```

{@return the number of local variable index or operand stack depth consumed by this type}
 This is also the category of this type for instructions operating on the operand stack without
 regard to type (JVMS {@jvms 2.11.1}), such as `POP pop` versus `POP2
 pop2`.
