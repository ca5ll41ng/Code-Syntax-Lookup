---
id: "java-en-function-files-readattributes"
language: "java"
lang: "en"
category: "function"
name: "Files.readAttributes"
signature: "public static <A extends BasicFileAttributes> A readAttributes(Path path, Class<A> type, LinkOption... options) throws IOException"
title: "Files.readAttributes"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.readAttributes

```java
public static <A extends BasicFileAttributes> A readAttributes(Path path, Class<A> type, LinkOption... options) throws IOException
```

Reads a file's attributes as a bulk operation.

 

 The `type` parameter is the type of the attributes required
 and this method returns an instance of that type if supported. All
 implementations support a basic set of file attributes and so invoking
 this method with a  `type` parameter of `BasicFileAttributes.class` will not throw `UnsupportedOperationException`.

 

 The `options` array may be used to indicate how symbolic links
 are handled for the case that the file is a symbolic link. By default,
 symbolic links are followed and the file attribute of the final target
 of the link is read. If the option `NOFOLLOW_LINKS
 NOFOLLOW_LINKS` is present then symbolic links are not followed.

 

 It is implementation specific if all file attributes are read as an
 atomic operation with respect to other file system operations.

 

 **Usage Example:**
 Suppose we want to read a file's attributes in bulk:
 {@snippet lang=java :
     Path path = ...
     BasicFileAttributes attrs = Files.readAttributes(path, BasicFileAttributes.class);
 }
 Alternatively, suppose we want to read file's POSIX attributes without
 following symbolic links:
 {@snippet lang=java :
     PosixFileAttributes attrs =
         Files.readAttributes(path, PosixFileAttributes.class, NOFOLLOW_LINKS);
 }

**参数**

- **The** — `BasicFileAttributes` type
- **path** — the path to the file
- **type** — the `Class` of the file attributes required to read
- **options** — options indicating how symbolic links are handled

**返回**

- the file attributes

**异常**

- **UnsupportedOperationException** — if an attributes of the given type are not supported
- **IOException** — if an I/O error occurs
