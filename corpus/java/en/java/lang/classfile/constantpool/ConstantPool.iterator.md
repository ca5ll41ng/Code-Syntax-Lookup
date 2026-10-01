---
id: "java-en-function-constantpool-iterator"
language: "java"
lang: "en"
category: "function"
name: "ConstantPool.iterator"
signature: "default Iterator<PoolEntry> iterator()"
title: "ConstantPool.iterator"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/ConstantPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantPool.iterator

```java
default Iterator<PoolEntry> iterator()
```

{@return an iterator over pool entries}

 This skips any unusable index and is less error-prone than iterating by
 raw index.  See `#index Index in the Constant Pool`.
