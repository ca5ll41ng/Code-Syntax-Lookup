---
id: "java-en-function-buffer-duplicate"
language: "java"
lang: "en"
category: "function"
name: "Buffer.duplicate"
signature: "public abstract Buffer duplicate()"
title: "Buffer.duplicate"
directive: "method"
module: "java.base/java.nio"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/Buffer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Buffer.duplicate

```java
public abstract Buffer duplicate()
```

Creates a new buffer that shares this buffer's content.

 

 The content of the new buffer will be that of this buffer.  Changes
 to this buffer's content will be visible in the new buffer, and vice
 versa; the two buffers' position, limit, and mark values will be
 independent.

 

 The new buffer's capacity, limit, position and mark values will be
 identical to those of this buffer. The new buffer will be direct if, and
 only if, this buffer is direct, and it will be read-only if, and only if,
 this buffer is read-only.

**返回**

- The new buffer

> *Since 9*
