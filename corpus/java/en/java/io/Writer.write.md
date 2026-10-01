---
id: "java-en-function-writer-write"
language: "java"
lang: "en"
category: "function"
name: "Writer.write"
signature: "public void write(int c) throws IOException"
title: "Writer.write"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/Writer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Writer.write

```java
public void write(int c) throws IOException
```

Writes a single character.  The character to be written is contained in
 the 16 low-order bits of the given integer value; the 16 high-order bits
 are ignored.

 

 Subclasses that intend to support efficient single-character output
 should override this method.

**参数**

- **c** — int specifying a character to be written

**异常**

- **IOException** — If an I/O error occurs
