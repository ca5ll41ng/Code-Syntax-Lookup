---
id: "java-en-function-files-issamefile"
language: "java"
lang: "en"
category: "function"
name: "Files.isSameFile"
signature: "public static boolean isSameFile(Path path, Path path2) throws IOException"
title: "Files.isSameFile"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.isSameFile

```java
public static boolean isSameFile(Path path, Path path2) throws IOException
```

Tests if two paths locate the same file.

 

 If both `Path` objects are `equals(Object) equal`
 then this method returns `true` without checking if the file exists.
 If the two `Path` objects are associated with different providers
 then this method returns `false`. Otherwise, this method checks if
 both `Path` objects locate the same file, and depending on the
 implementation, may require to open or access both files.

 

 If the file system and files remain static, then this method implements
 an equivalence relation for non-null `Paths`.
 
 
- It is reflexive: for `Path` `f`,
     `isSameFile(f,f)` should return `true`.
 
- It is symmetric: for two `Paths` `f` and `g`,
     `isSameFile(f,g)` will equal `isSameFile(g,f)`.
 
- It is transitive: for three `Paths`
     `f`, `g`, and `h`, if `isSameFile(f,g)` returns
     `true` and `isSameFile(g,h)` returns `true`, then
     `isSameFile(f,h)` will return `true`.

**参数**

- **path** — one path to the file
- **path2** — the other path

**返回**

- `true` if, and only if, the two paths locate the same file

**异常**

- **IOException** — if an I/O error occurs

**参见**

- java.nio.file.attribute.BasicFileAttributes#fileKey
