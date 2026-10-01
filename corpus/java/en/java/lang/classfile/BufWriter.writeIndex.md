---
id: "java-en-function-bufwriter-writeindex"
language: "java"
lang: "en"
category: "function"
name: "BufWriter.writeIndex"
signature: "void writeIndex(PoolEntry entry)"
title: "BufWriter.writeIndex"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/BufWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufWriter.writeIndex

```java
void writeIndex(PoolEntry entry)
```

Writes the index of the specified constant pool entry as a `writeU2 u2`.  If the `entry` does not belong to the `constantPool() constant pool` of this buffer, it will be `#alien converted`, and the index of the converted
 pool entry is written instead.

**参数**

- **entry** — the constant pool entry

**异常**

- **IllegalArgumentException** — if the entry has invalid index
