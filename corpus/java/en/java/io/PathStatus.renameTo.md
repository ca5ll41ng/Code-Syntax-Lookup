---
id: "java-en-function-pathstatus-renameto"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.renameTo"
signature: "public boolean renameTo(File dest)"
title: "PathStatus.renameTo"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.renameTo

```java
public boolean renameTo(File dest)
```

Renames the file located by this abstract pathname.  If this pathname
 locates a symbolic link, then the link itself, not its target, will be
 renamed.

 

 Many aspects of the behavior of this method are inherently
 platform-dependent: The rename operation might not be able to move a
 file from one filesystem to another, it might not be atomic, and it
 might not succeed if a file with the destination abstract pathname
 already exists.  The return value should always be checked to make sure
 that the rename operation was successful.  As instances of `File`
 are immutable, this File object is not changed to name the destination
 file or directory.

 

 Note that the `java.nio.file.Files` class defines the `move move` method to move or rename a file in a
 platform independent manner.

**参数**

- **dest** — The new abstract pathname for the named file

**返回**

- `true` if and only if the renaming succeeded; `false` otherwise

**异常**

- **NullPointerException** — If parameter `dest` is `null`
