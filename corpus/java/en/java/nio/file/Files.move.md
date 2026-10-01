---
id: "java-en-function-files-move"
language: "java"
lang: "en"
category: "function"
name: "Files.move"
signature: "public static Path move(Path source, Path target, CopyOption... options) throws IOException"
title: "Files.move"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.move

```java
public static Path move(Path source, Path target, CopyOption... options) throws IOException
```

Move or rename a file to a target file.

 

 By default, this method attempts to move the file to the target
 file, failing if the target file exists except if the source and
 target are the `isSameFile same` file, in which case this method
 has no effect. If the file is a symbolic link then the symbolic link
 itself, not the target of the link, is moved. This method may be
 invoked to move an empty directory. In some implementations a directory
 has entries for special files or links that are created when the
 directory is created. In such implementations a directory is considered
 empty when only the special entries exist. When invoked to move a
 directory that is not empty then the directory is moved if it does not
 require moving the entries in the directory.  For example, renaming a
 directory on the same `FileStore` will usually not require moving
 the entries in the directory. When moving a directory requires that its
 entries be moved then this method fails (by throwing an `IOException`). To move a file tree may involve copying rather
 than moving directories and this can be done using the `copy copy` method in conjunction with the `walkFileTree Files.walkFileTree` utility method.

 

 The `options` parameter may include any of the following:

 
 Options
 
  Option Description 
 
 
 
    `REPLACE_EXISTING REPLACE_EXISTING` 
    Replace an existing file. A non-empty directory cannot be
     replaced. If the target file exists and is a symbolic link, then the
     symbolic link itself, not the target of the link, is replaced. 
 
 
    `ATOMIC_MOVE ATOMIC_MOVE` 
    The move is performed as an atomic file system operation and all
     other options are ignored. If the target file exists then it is
     implementation specific if the existing file is replaced or this method
     fails by throwing an `IOException`. If the move cannot be
     performed as an atomic file system operation then `AtomicMoveNotSupportedException` is thrown. This can arise, for
     example, when the target location is on a different `FileStore`
     and would require that the file be copied, or target location is
     associated with a different provider to this object. 
 
 
 If the `ATOMIC_MOVE` option is not specified, then the check
 whether the target file exists and the actual move might not be atomic
 with respect to other filesystem activities.

 

 An implementation of this interface may support additional
 implementation specific options.

 

 Moving a file will copy the `lastModifiedTime last-modified-time` to the target
 file if supported by both source and target file stores. Copying of file
 timestamps may result in precision loss. An implementation may also
 attempt to copy other file attributes but is not required to fail if the
 file attributes cannot be copied. When the move is performed as
 a non-atomic operation, and an `IOException` is thrown, then the
 state of the files is not defined. The original file and the target file
 may both exist, the target file may be incomplete or some of its file
 attributes may not been copied from the original file.

 

 **Usage Examples:**
 Suppose we want to rename a file to "newname", keeping the file in the
 same directory:
 {@snippet lang=java :
     Path source = ...
     Files.move(source, source.resolveSibling("newname"));
 }
 Alternatively, suppose we want to move a file to new directory, keeping
 the same file name, and replacing any existing file of that name in the
 directory:
 {@snippet lang=java :
     Path source = ...
     Path newdir = ...
     Files.move(source, newdir.resolve(source.getFileName()), REPLACE_EXISTING);
 }

**参数**

- **source** — the path to the file to move
- **target** — the path to the target file (may be associated with a different provider to the source path)
- **options** — options specifying how the move should be done

**返回**

- the path to the target file

**异常**

- **UnsupportedOperationException** — if the array contains a copy option that is not supported
- **FileAlreadyExistsException** — if the target file exists but cannot be replaced because the `REPLACE_EXISTING` option is not specified. It may also be thrown when the `REPLACE_EXISTING` option is specified, the move is not atomic, and the target file is created by some other entity at around the same time that this method is called
- **DirectoryNotEmptyException** — the `REPLACE_EXISTING` option is specified but the file cannot be replaced because it is a non-empty directory, or the source is a non-empty directory containing entries that would be required to be moved (optional specific exceptions)
- **AtomicMoveNotSupportedException** — if the options array contains the `ATOMIC_MOVE` option but the file cannot be moved as an atomic file system operation.
- **IOException** — if an I/O error occurs
