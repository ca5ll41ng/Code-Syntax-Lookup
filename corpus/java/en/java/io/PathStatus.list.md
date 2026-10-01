---
id: "java-en-function-pathstatus-list"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.list"
signature: "public String[] list()"
title: "PathStatus.list"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.list

```java
public String[] list()
```

Returns an array of strings naming the files and directories in the
 directory located by this abstract pathname.

 

 If this abstract pathname does not locate a directory, then this
 method returns `null`.  Otherwise an array of strings is
 returned, one for each file or directory in the directory.  Names
 locating the directory itself and the directory's parent directory are
 not included in the result.  Each string is a file name rather than a
 complete path.

 

 There is no guarantee that the name strings in the resulting array
 will appear in any specific order; they are not, in particular,
 guaranteed to appear in alphabetical order.

 

 Note that the `java.nio.file.Files` class defines the `newDirectoryStream(Path) newDirectoryStream` method to
 open a directory and iterate over the names of the files in the directory.
 This may use less resources when working with very large directories, and
 may be more responsive when working with remote directories.

**返回**

- An array of strings naming the files and directories in the directory located by this abstract pathname.  The array will be empty if the directory is empty.  Returns `null` if this abstract pathname does not locate a directory, or if an I/O error occurs.
