---
id: "java-en-function-filesystemprovider-checkaccess"
language: "java"
lang: "en"
category: "function"
name: "FileSystemProvider.checkAccess"
signature: "public abstract void checkAccess(Path path, AccessMode... modes) throws IOException"
title: "FileSystemProvider.checkAccess"
directive: "method"
module: "java.base/java.nio.file.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/spi/FileSystemProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystemProvider.checkAccess

```java
public abstract void checkAccess(Path path, AccessMode... modes) throws IOException
```

Checks the existence, and optionally the accessibility, of a file.

 

 This method may be used by the `isReadable isReadable`,
 `isWritable isWritable` and `isExecutable
 isExecutable` methods to check the accessibility of a file.

 

 This method checks the existence of a file and that this Java virtual
 machine has appropriate privileges that would allow it access the file
 according to all of access modes specified in the `modes` parameter
 as follows:

 
 Access Modes
 
  Value Description 
 
 
 
    `READ READ` 
    Checks that the file exists and that the Java virtual machine has
     permission to read the file. 
 
 
    `WRITE WRITE` 
    Checks that the file exists and that the Java virtual machine has
     permission to write to the file, 
 
 
    `EXECUTE EXECUTE` 
    Checks that the file exists and that the Java virtual machine has
     permission to `exec execute` the file. The semantics
     may differ when checking access to a directory. For example, on UNIX
     systems, checking for `EXECUTE` access checks that the Java
     virtual machine has permission to search the directory in order to
     access file or subdirectories. 
 
 
 

 

 If the `modes` parameter is of length zero, then the existence
 of the file is checked.

 

 This method follows symbolic links if the file referenced by this
 object is a symbolic link. Depending on the implementation, this method
 may require to read file permissions, access control lists, or other
 file attributes in order to check the effective access to the file. To
 determine the effective access to a file may require access to several
 attributes and so in some implementations this method may not be atomic
 with respect to other file system operations.

**参数**

- **path** — the path to the file to check
- **modes** — The access modes to check; may have zero elements

**异常**

- **UnsupportedOperationException** — an implementation is required to support checking for `READ`, `WRITE`, and `EXECUTE` access. This exception is specified to allow for the `Access` enum to be extended in future releases.
- **NoSuchFileException** — if a file does not exist (optional specific exception)
- **AccessDeniedException** — the requested access would be denied or the access cannot be determined because the Java virtual machine has insufficient privileges or other reasons. (optional specific exception)
- **IOException** — if an I/O error occurs
