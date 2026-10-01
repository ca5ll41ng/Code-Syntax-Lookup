---
id: "java-en-function-bufwriter-patchint"
language: "java"
lang: "en"
category: "function"
name: "BufWriter.patchInt"
signature: "void patchInt(int offset, int size, int value)"
title: "BufWriter.patchInt"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/BufWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufWriter.patchInt

```java
void patchInt(int offset, int size, int value)
```

Patches a previously written integer value.  `value` is truncated
 to the given `size` number of bytes and written at the given `offset`.  The end of this buffer stays unchanged.

 The `offset` can be obtained by calling `size` before
 writing the previous integer value.

**参数**

- **offset** — the offset in this buffer at which to patch
- **size** — the size of the integer value being written, in bytes
- **value** — the integer value to be truncated

**异常**

- **IndexOutOfBoundsException** — if patched int is outside of bounds

**参见**

- #size()
