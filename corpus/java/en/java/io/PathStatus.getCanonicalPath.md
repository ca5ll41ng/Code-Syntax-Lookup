---
id: "java-en-function-pathstatus-getcanonicalpath"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.getCanonicalPath"
signature: "public String getCanonicalPath() throws IOException"
title: "PathStatus.getCanonicalPath"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.getCanonicalPath

```java
public String getCanonicalPath() throws IOException
```

Returns the canonical pathname string of this abstract pathname.

 

 A canonical pathname is both absolute and unique.  The precise
 definition of canonical form is system-dependent.  This method first
 converts this pathname to absolute form if necessary, as if by invoking the
 `getAbsolutePath` method, and then maps it to its unique form in a
 system-dependent way.  This typically involves removing redundant names
 such as `"."` and `".."` from the pathname, resolving
 symbolic links, and converting drive letters to a standard case (on
 Microsoft Windows platforms).

 

 Every pathname that locates an existing file or directory has a
 unique canonical form.  Every pathname that denotes a nonexistent file
 or directory also has a unique canonical form.  The canonical form of
 the pathname of a nonexistent file or directory may be different from
 the canonical form of the same pathname after the file or directory is
 created.  Similarly, the canonical form of the pathname of an existing
 file or directory may be different from the canonical form of the same
 pathname after the file or directory is deleted.

**返回**

- The canonical pathname string locating the same file or directory as this abstract pathname

**异常**

- **IOException** — If an I/O error occurs, which is possible because the construction of the canonical pathname may require filesystem queries

**参见**

- Path#toRealPath

> *Since 1.1*
