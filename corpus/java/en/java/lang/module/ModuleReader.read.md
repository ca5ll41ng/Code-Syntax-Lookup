---
id: "java-en-function-modulereader-read"
language: "java"
lang: "en"
category: "function"
name: "ModuleReader.read"
signature: "default Optional<ByteBuffer> read(String name) throws IOException"
title: "ModuleReader.read"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleReader.read

```java
default Optional<ByteBuffer> read(String name) throws IOException
```

Reads a resource, returning a byte buffer with the contents of the
 resource.

 The element at the returned buffer's position is the first byte of the
 resource, the element at the buffer's limit is the last byte of the
 resource. Once consumed, the `release(ByteBuffer) release` method
 must be invoked. Failure to invoke the `release` method may result
 in a resource leak.

 is not capable (or intended) to read arbitrary large resources that
 could potentially be 2GB or larger. The rationale for using this method
 in conjunction with the `release` method is to allow module reader
 implementations manage buffers in an efficient manner.

 open` method and reads all bytes from the input stream into a byte
 buffer.

**参数**

- **name** — The name of the resource to read

**返回**

- A byte buffer containing the contents of the resource or an empty `Optional` if not found

**异常**

- **IOException** — If an I/O error occurs or the module reader is closed
- **OutOfMemoryError** — If the resource is larger than `Integer.MAX_VALUE`, the maximum capacity of a byte buffer

**参见**

- ClassLoader#defineClass(String, ByteBuffer, java.security.ProtectionDomain)
