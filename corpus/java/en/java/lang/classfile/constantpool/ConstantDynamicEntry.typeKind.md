---
id: "java-en-function-constantdynamicentry-typekind"
language: "java"
lang: "en"
category: "function"
name: "ConstantDynamicEntry.typeKind"
signature: "default TypeKind typeKind()"
title: "ConstantDynamicEntry.typeKind"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/ConstantDynamicEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantDynamicEntry.typeKind

```java
default TypeKind typeKind()
```

{@inheritDoc}

 The data type of a dynamically-computed constant depends on its
 `type() descriptor`, while the data type of all other
 constants can be determined by their `tag() constant type`.
