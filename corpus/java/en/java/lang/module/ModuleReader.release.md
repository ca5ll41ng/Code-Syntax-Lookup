---
id: "java-en-function-modulereader-release"
language: "java"
lang: "en"
category: "function"
name: "ModuleReader.release"
signature: "default void release(ByteBuffer bb)"
title: "ModuleReader.release"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleReader.release

```java
default void release(ByteBuffer bb)
```

Releases a byte buffer. This method should be invoked after consuming
 the contents of the buffer returned by the `read` method.
 The behavior of this method when invoked to release a buffer that has
 already been released, or the behavior when invoked to release a buffer
 after a `ModuleReader` is closed is implementation specific and
 therefore not specified.

 if the byte buffer is null.

**参数**

- **bb** — The byte buffer to release
