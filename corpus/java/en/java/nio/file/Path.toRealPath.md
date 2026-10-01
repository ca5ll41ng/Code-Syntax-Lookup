---
id: "java-en-function-path-torealpath"
language: "java"
lang: "en"
category: "function"
name: "Path.toRealPath"
signature: "Path toRealPath(LinkOption... options) throws IOException"
title: "Path.toRealPath"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Path.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Path.toRealPath

```java
Path toRealPath(LinkOption... options) throws IOException
```

Returns the real path of an existing file.

 

 The precise definition of this method is implementation dependent but
 in general it derives from this path, an `isAbsolute absolute`
 path that locates the `isSameFile same` file as this path, but
 with name elements that represent the actual name of the directories
 and the file. For example, where filename comparisons on a file system
 are case insensitive then the name elements represent the names in their
 actual case. Additionally, the resulting path has redundant name
 elements removed.

 

 If this path is relative then its absolute path is first obtained,
 as if by invoking the `toAbsolutePath toAbsolutePath` method.

 

 The `options` array may be used to indicate how symbolic links
 are handled. By default, symbolic links are resolved to their final
 target. If the option `NOFOLLOW_LINKS NOFOLLOW_LINKS` is
 present then this method does not resolve symbolic links.

 Some implementations allow special names such as "`..`" to refer to
 the parent directory. When deriving the real path, and a
 "`..`" (or equivalent) is preceded by a non-"`..`" name then
 an implementation will typically cause both names to be removed. When
 not resolving symbolic links and the preceding name is a symbolic link
 then the names are only removed if it is guaranteed that the resulting
 path will locate the same file as this path.

**参数**

- **options** — options indicating how symbolic links are handled

**返回**

- an absolute path represent the real path of the file located by this object

**异常**

- **IOException** — if the file does not exist or an I/O error occurs
