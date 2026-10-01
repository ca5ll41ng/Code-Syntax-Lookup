---
id: "java-en-function-bufwriter-reservespace"
language: "java"
lang: "en"
category: "function"
name: "BufWriter.reserveSpace"
signature: "void reserveSpace(int freeBytes)"
title: "BufWriter.reserveSpace"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/BufWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufWriter.reserveSpace

```java
void reserveSpace(int freeBytes)
```

Ensures that the buffer has at least `freeBytes` bytes of free space
 in the end of the buffer.
 

 The writing result is the same without calls to this method, but the
 writing process may be slower.

 This is a hint that changes no visible state of the buffer; it helps to
 reduce reallocation of the underlying storage by allocating sufficient
 space at once.

**参数**

- **freeBytes** — the number of bytes to reserve
