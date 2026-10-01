---
id: "java-en-function-path-tofile"
language: "java"
lang: "en"
category: "function"
name: "Path.toFile"
signature: "default File toFile()"
title: "Path.toFile"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Path.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Path.toFile

```java
default File toFile()
```

Returns a `File` object representing this path. Where this `Path` is associated with the default provider, then this method is
 equivalent to returning a `File` object constructed with the
 `String` representation of this path.

 

 If this path was created by invoking the `File` `toPath toPath` method then there is no guarantee that the `File` object returned by this method is `equals equal` to the
 original `File`.

 The default implementation is equivalent for this path to:
 {@snippet lang=java :
     new File(toString());
 }
 if the `FileSystem` which created this `Path` is the default
 file system; otherwise an `UnsupportedOperationException` is
 thrown.

**返回**

- a `File` object representing this path

**异常**

- **UnsupportedOperationException** — if this `Path` is not associated with the default provider
