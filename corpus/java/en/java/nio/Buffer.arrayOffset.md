---
id: "java-en-function-buffer-arrayoffset"
language: "java"
lang: "en"
category: "function"
name: "Buffer.arrayOffset"
signature: "public abstract int arrayOffset()"
title: "Buffer.arrayOffset"
directive: "method"
module: "java.base/java.nio"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/Buffer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Buffer.arrayOffset

```java
public abstract int arrayOffset()
```

Returns the offset within this buffer's backing array of the first
 element of the buffer&nbsp;&nbsp;(optional operation).

 

 If this buffer is backed by an array then buffer position p
 corresponds to array index p&nbsp;+&nbsp;`arrayOffset()`.

 

 Invoke the `hasArray hasArray` method before invoking this
 method in order to ensure that this buffer has an accessible backing
 array.

**返回**

- The offset within this buffer's array of the first element of the buffer

**异常**

- **ReadOnlyBufferException** — If this buffer is backed by an array but is read-only
- **UnsupportedOperationException** — If this buffer is not backed by an accessible array

> *Since 1.6*
