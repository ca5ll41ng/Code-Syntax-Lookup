---
id: "java-en-function-buffer-slice"
language: "java"
lang: "en"
category: "function"
name: "Buffer.slice"
signature: "public abstract Buffer slice()"
title: "Buffer.slice"
directive: "method"
module: "java.base/java.nio"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/Buffer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Buffer.slice

```java
public abstract Buffer slice()
```

Creates a new buffer whose content is a shared subsequence of
 this buffer's content.

 

 The content of the new buffer will start at this buffer's current
 position.  Changes to this buffer's content will be visible in the new
 buffer, and vice versa; the two buffers' position, limit, and mark
 values will be independent.

 

 The new buffer's position will be zero, its capacity and its limit
 will be the number of elements remaining in this buffer, its mark will be
 undefined. The new buffer will be direct if, and only if, this buffer is
 direct, and it will be read-only if, and only if, this buffer is
 read-only.

**返回**

- The new buffer

> *Since 9*
