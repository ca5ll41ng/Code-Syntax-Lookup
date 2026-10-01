---
id: "java-en-function-files-createfile"
language: "java"
lang: "en"
category: "function"
name: "Files.createFile"
signature: "public static Path createFile(Path path, FileAttribute<?>... attrs) throws IOException"
title: "Files.createFile"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.createFile

```java
public static Path createFile(Path path, FileAttribute<?>... attrs) throws IOException
```

Creates a new and empty file, failing if `path` locates an existing
 file. The check for the existence of the file and the creation of the new
 file if it does not exist are a single operation that is atomic with
 respect to all other filesystem activities that might affect the
 directory.

 

 The `attrs` parameter is optional `FileAttribute
 file-attributes` to set atomically when creating the file. Each attribute
 is identified by its `name name`. If more than one
 attribute of the same name is included in the array then all but the last
 occurrence is ignored.

**参数**

- **path** — the path to the file to create
- **attrs** — an optional list of file attributes to set atomically when creating the file

**返回**

- the file

**异常**

- **UnsupportedOperationException** — if the array contains an attribute that cannot be set atomically when creating the file
- **FileAlreadyExistsException** — if `path` locates an existing file (optional specific exception)
- **IOException** — if an I/O error occurs or the parent directory does not exist
