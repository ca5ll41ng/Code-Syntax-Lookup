---
id: "java-en-function-bufwriter-writeindexorzero"
language: "java"
lang: "en"
category: "function"
name: "BufWriter.writeIndexOrZero"
signature: "void writeIndexOrZero(PoolEntry entry)"
title: "BufWriter.writeIndexOrZero"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/BufWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufWriter.writeIndexOrZero

```java
void writeIndexOrZero(PoolEntry entry)
```

Writes the index of the specified constant pool entry, or the value
 `0` if the specified entry is `null`, as a `writeU2
 u2`.  If the `entry` does not belong to the `constantPool() constant pool` of this buffer, it will be `#alien converted`, and the index of the converted
 pool entry is written instead.

**参数**

- **entry** — the constant pool entry, may be `null`

**异常**

- **IllegalArgumentException** — if the entry is not `null` and has invalid index
