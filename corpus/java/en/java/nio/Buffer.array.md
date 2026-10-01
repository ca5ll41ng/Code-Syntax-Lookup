---
id: "java-en-function-buffer-array"
language: "java"
lang: "en"
category: "function"
name: "Buffer.array"
signature: "public abstract Object array()"
title: "Buffer.array"
directive: "method"
module: "java.base/java.nio"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/Buffer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Buffer.array

```java
public abstract Object array()
```

Returns the array that backs this
 buffer&nbsp;&nbsp;(optional operation).

 

 This method is intended to allow array-backed buffers to be
 passed to native code more efficiently. Concrete subclasses
 provide more strongly-typed return values for this method.

 

 Modifications to this buffer's content will cause the returned
 array's content to be modified, and vice versa.

 

 Invoke the `hasArray hasArray` method before invoking this
 method in order to ensure that this buffer has an accessible backing
 array.

**返回**

- The array that backs this buffer

**异常**

- **ReadOnlyBufferException** — If this buffer is backed by an array but is read-only
- **UnsupportedOperationException** — If this buffer is not backed by an accessible array

> *Since 1.6*
