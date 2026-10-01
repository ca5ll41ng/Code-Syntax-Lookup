---
id: "java-en-function-files-createsymboliclink"
language: "java"
lang: "en"
category: "function"
name: "Files.createSymbolicLink"
signature: "public static Path createSymbolicLink(Path link, Path target, FileAttribute<?>... attrs) throws IOException"
title: "Files.createSymbolicLink"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.createSymbolicLink

```java
public static Path createSymbolicLink(Path link, Path target, FileAttribute<?>... attrs) throws IOException
```

Creates a symbolic link to a target, failing if `link` locates an
 existing file (optional operation).

 

 The `target` parameter is the target of the link. It may be an
 `isAbsolute absolute` or relative path and may not exist. When
 the target is a relative path then file system operations on the resulting
 link are relative to the path of the link.

 

 The `attrs` parameter is optional `FileAttribute
 attributes` to set atomically when creating the link. Each attribute is
 identified by its `name name`. If more than one attribute
 of the same name is included in the array then all but the last occurrence
 is ignored.

 

 Where symbolic links are supported, but the underlying `FileStore`
 does not support symbolic links, then this may fail with an `IOException`. Additionally, some operating systems may require that the
 Java virtual machine be started with implementation specific privileges to
 create symbolic links, in which case this method may throw `IOException`.

**参数**

- **link** — the path of the symbolic link to create
- **target** — the target of the symbolic link
- **attrs** — the array of attributes to set atomically when creating the symbolic link

**返回**

- the path to the symbolic link

**异常**

- **UnsupportedOperationException** — if the implementation does not support symbolic links or the array contains an attribute that cannot be set atomically when creating the symbolic link
- **FileAlreadyExistsException** — if `link` locates an existing file (optional specific exception)
- **IOException** — if an I/O error occurs
