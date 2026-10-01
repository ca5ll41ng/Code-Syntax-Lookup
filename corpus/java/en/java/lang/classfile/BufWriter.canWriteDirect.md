---
id: "java-en-function-bufwriter-canwritedirect"
language: "java"
lang: "en"
category: "function"
name: "BufWriter.canWriteDirect"
signature: "boolean canWriteDirect(ConstantPool other)"
title: "BufWriter.canWriteDirect"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/BufWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufWriter.canWriteDirect

```java
boolean canWriteDirect(ConstantPool other)
```

{@return whether the provided constant pool is index-compatible with the
 constant pool of this buffer}
 

 This is a shortcut for `constantPool().canWriteDirect(other)`.

**参数**

- **other** — the other constant pool

**参见**

- ConstantPoolBuilder#canWriteDirect(ConstantPool)
