---
id: "java-en-function-files-delete"
language: "java"
lang: "en"
category: "function"
name: "Files.delete"
signature: "public static void delete(Path path) throws IOException"
title: "Files.delete"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.delete

```java
public static void delete(Path path) throws IOException
```

Deletes a file.

 

 An implementation may require to examine the file to determine if the
 file is a directory. Consequently this method may not be atomic with respect
 to other file system operations.  If the file is a symbolic link then the
 symbolic link itself, not the final target of the link, is deleted.

 

 If the file is a directory then the directory must be empty. In some
 implementations a directory has entries for special files or links that
 are created when the directory is created. In such implementations a
 directory is considered empty when only the special entries exist.
 This method can be used with the `walkFileTree walkFileTree`
 method to delete a directory and all entries in the directory, or an
 entire file-tree where required.

 

 On some operating systems it may not be possible to remove a file when
 it is open and in use by this Java virtual machine or other programs.

**参数**

- **path** — the path to the file to delete

**异常**

- **NoSuchFileException** — if the file does not exist (optional specific exception)
- **DirectoryNotEmptyException** — if the file is a directory and could not otherwise be deleted because the directory is not empty (optional specific exception)
- **IOException** — if an I/O error occurs
