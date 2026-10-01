---
id: "java-en-function-buffer-hasarray"
language: "java"
lang: "en"
category: "function"
name: "Buffer.hasArray"
signature: "public abstract boolean hasArray()"
title: "Buffer.hasArray"
directive: "method"
module: "java.base/java.nio"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/Buffer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Buffer.hasArray

```java
public abstract boolean hasArray()
```

Tells whether or not this buffer is backed by an accessible
 array.

 

 If this method returns `true` then the `array() array`
 and `arrayOffset() arrayOffset` methods may safely be invoked.

**返回**

- `true` if, and only if, this buffer is backed by an array and is not read-only

> *Since 1.6*
