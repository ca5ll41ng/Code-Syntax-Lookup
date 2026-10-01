---
id: "java-en-function-pathstatus-listfiles"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.listFiles"
signature: "public File[] listFiles()"
title: "PathStatus.listFiles"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.listFiles

```java
public File[] listFiles()
```

Returns an array of abstract pathnames locating the files in the
 directory located by this abstract pathname.

 

 If this abstract pathname does not locate a directory, then this
 method returns `null`.  Otherwise an array of `File` objects
 is returned, one for each file or directory in the directory.  Pathnames
 locating the directory itself and the directory's parent directory are
 not included in the result.  Each resulting abstract pathname is
 constructed from this abstract pathname using the `File(File,
 String) File` constructor.  Therefore if this
 pathname is absolute then each resulting pathname is absolute; if this
 pathname is relative then each resulting pathname will be relative to
 the same directory.

 

 There is no guarantee that the name strings in the resulting array
 will appear in any specific order; they are not, in particular,
 guaranteed to appear in alphabetical order.

 

 Note that the `java.nio.file.Files` class defines the `newDirectoryStream(Path) newDirectoryStream` method
 to open a directory and iterate over the names of the files in the
 directory. This may use less resources when working with very large
 directories.

**返回**

- An array of abstract pathnames locating the files and directories in the directory located by this abstract pathname. The array will be empty if the directory is empty.  Returns `null` if this abstract pathname does not locate a directory, or if an I/O error occurs.

> *Since 1.2*
