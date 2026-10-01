---
id: "java-en-function-constantpool-bootstrapmethodentry"
language: "java"
lang: "en"
category: "function"
name: "ConstantPool.bootstrapMethodEntry"
signature: "BootstrapMethodEntry bootstrapMethodEntry(int index)"
title: "ConstantPool.bootstrapMethodEntry"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/ConstantPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantPool.bootstrapMethodEntry

```java
BootstrapMethodEntry bootstrapMethodEntry(int index)
```

{@return the `BootstrapMethodEntry` at the specified index within
 the bootstrap method table}

**参数**

- **index** — the index within the bootstrap method table of the desired entry

**异常**

- **ConstantPoolException** — if the index is out of range of the bootstrap methods
