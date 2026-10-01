---
id: "java-en-function-files-copy"
language: "java"
lang: "en"
category: "function"
name: "Files.copy"
signature: "public static Path copy(Path source, Path target, CopyOption... options) throws IOException"
title: "Files.copy"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.copy

```java
public static Path copy(Path source, Path target, CopyOption... options) throws IOException
```

Copy a file to a target file.

 

 This method copies a file to the target file with the `options` parameter specifying how the copy is performed. By default, the
 copy fails if the target file already exists or is a symbolic link,
 except if the source and target are the `isSameFile same` file, in
 which case the method completes without copying the file. File attributes
 are not required to be copied to the target file. If symbolic links are
 supported, and the file is a symbolic link, then the final target of the
 link is copied. If the file is a directory then an empty directory is
 created in the target location (entries in the directory are not
 copied). This method can be used with the `walkFileTree
 walkFileTree` method to copy a directory and all entries in the directory,
 or an entire file-tree where required.

 

 The `options` parameter may include any of the following:

 
 Options
 
  Option Description 
 
 
 
    `REPLACE_EXISTING REPLACE_EXISTING` 
    Replace an existing file. A non-empty directory cannot be
     replaced. If the target file exists and is a symbolic link, then the
     symbolic link itself, not the target of the link, is replaced. 
 
 
    `COPY_ATTRIBUTES COPY_ATTRIBUTES` 
    Attempts to copy the file attributes associated with this file to
     the target file. The exact file attributes that are copied is platform
     and file system dependent and therefore unspecified. Minimally, the
     `lastModifiedTime last-modified-time` is
     copied to the target file if supported by both the source and target
     file stores. Copying of file timestamps may result in precision
     loss. 
 
 
    `NOFOLLOW_LINKS NOFOLLOW_LINKS` 
    Symbolic links are not followed. If the file is a symbolic link,
     then the symbolic link itself, not the target of the link, is copied.
     It is implementation specific if file attributes can be copied to the
     new link. In other words, the `COPY_ATTRIBUTES` option may be
     ignored when copying a symbolic link. 
 
 
 

 

 An implementation of this interface may support additional
 implementation specific options.

 

 Copying a file is not an atomic operation. If an `IOException`
 is thrown, then it is possible that the target file is incomplete or some
 of its file attributes have not been copied from the source file. When
 the `REPLACE_EXISTING` option is specified and the target file
 exists, then the target file is replaced. The check for the existence of
 the file and the creation of the new file may not be atomic with respect
 to other file system activities.

 

 **Usage Example:**
 Suppose we want to copy a file into a directory, giving it the same file
 name as the source file:
 {@snippet lang=java :
     Path source = ...
     Path newdir = ...
     Files.copy(source, newdir.resolve(source.getFileName());
 }

**参数**

- **source** — the path to the file to copy
- **target** — the path to the target file (may be associated with a different provider to the source path)
- **options** — options specifying how the copy should be done

**返回**

- the path to the target file

**异常**

- **UnsupportedOperationException** — if the array contains a copy option that is not supported
- **FileAlreadyExistsException** — if the target file exists but cannot be replaced because the `REPLACE_EXISTING` option is not specified (optional specific exception)
- **DirectoryNotEmptyException** — the `REPLACE_EXISTING` option is specified but the file cannot be replaced because it is a non-empty directory (optional specific exception)
- **IOException** — if an I/O error occurs
