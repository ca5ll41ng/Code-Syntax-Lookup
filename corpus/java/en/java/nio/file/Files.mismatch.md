---
id: "java-en-function-files-mismatch"
language: "java"
lang: "en"
category: "function"
name: "Files.mismatch"
signature: "public static long mismatch(Path path, Path path2) throws IOException"
title: "Files.mismatch"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.mismatch

```java
public static long mismatch(Path path, Path path2) throws IOException
```

Finds and returns the position of the first mismatched byte in the content
 of two files, or `-1L` if there is no mismatch. The position will be
 in the inclusive range of `0L` up to the size (in bytes) of the
 smaller file.

 

 Two files are considered to match if they satisfy one of the following
 conditions:
 
 
-  The two paths locate the `isSameFile(Path, Path) same file`,
      even if two `equals(Object) equal` paths locate a file
      that does not exist, or 
 
-  The two files are the same size, and every byte in the first file
      is identical to the corresponding byte in the second file. 
 

 

 Otherwise there is a mismatch between the two files and the value
 returned by this method is:
 
 
-  The position of the first mismatched byte, or 
 
-  The size of the smaller file (in bytes) when the files are of different
      sizes and every byte of the smaller file is identical to the
      corresponding byte of the larger file. 
 

 

 This method may not be atomic with respect to other file system
 operations. This method is always reflexive (for `Path f`,
 `mismatch(f,f)` returns `-1L`). If the file system and files
 remain static, then this method is symmetric (for two `Paths f`
 and `g`, `mismatch(f,g)` will return the same value as
 `mismatch(g,f)`).

 

 If both `Path` objects are equal, then this method returns
 `true` without checking if the file exists.

**参数**

- **path** — the path to the first file
- **path2** — the path to the second file

**返回**

- the position of the first mismatch or `-1L` if no mismatch

**异常**

- **IOException** — if an I/O error occurs

> *Since 12*
