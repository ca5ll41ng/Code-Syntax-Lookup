---
id: "java-en-function-constantpool-entrybyindex"
language: "java"
lang: "en"
category: "function"
name: "ConstantPool.entryByIndex"
signature: "PoolEntry entryByIndex(int index)"
title: "ConstantPool.entryByIndex"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/ConstantPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantPool.entryByIndex

```java
PoolEntry entryByIndex(int index)
```

{@return the entry at the specified index}

 If only a particular type of entry is expected, use `entryByIndex(
 int, Class)`.

**参数**

- **index** — the index within the pool of the desired entry

**异常**

- **ConstantPoolException** — if the index is out of range of the constant pool, or is considered unusable
