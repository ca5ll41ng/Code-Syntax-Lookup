---
id: "java-en-function-files-createdirectories"
language: "java"
lang: "en"
category: "function"
name: "Files.createDirectories"
signature: "public static Path createDirectories(Path dir, FileAttribute<?>... attrs) throws IOException"
title: "Files.createDirectories"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.createDirectories

```java
public static Path createDirectories(Path dir, FileAttribute<?>... attrs) throws IOException
```

Creates a directory by creating all nonexistent parent directories first.
 Unlike the `createDirectory createDirectory` method, an exception
 is not thrown if the directory could not be created because it already
 exists.

 

 The `attrs` parameter is optional `FileAttribute
 file-attributes` to set atomically when creating the nonexistent
 directories. Each file attribute is identified by its `name name`. If more than one attribute of the same name is
 included in the array then all but the last occurrence is ignored.

 

 If this method fails, then it may do so after creating some, but not
 all, of the parent directories.

**参数**

- **dir** — the directory to create
- **attrs** — an optional list of file attributes to set atomically when creating the directory

**返回**

- the directory

**异常**

- **UnsupportedOperationException** — if the array contains an attribute that cannot be set atomically when creating the directory
- **FileAlreadyExistsException** — if `dir` locates an existing file that is not a directory (optional specific exception)
- **IOException** — if an I/O error occurs
