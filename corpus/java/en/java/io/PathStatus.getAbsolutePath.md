---
id: "java-en-function-pathstatus-getabsolutepath"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.getAbsolutePath"
signature: "public String getAbsolutePath()"
title: "PathStatus.getAbsolutePath"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.getAbsolutePath

```java
public String getAbsolutePath()
```

Returns the absolute pathname string of this abstract pathname.

 

 If this abstract pathname is already absolute, then the pathname
 string is simply returned as if by the `getPath`
 method.  If this abstract pathname is the empty abstract pathname then
 the pathname string of the current user directory, which is named by the
 system property `user.dir`, is returned.  Otherwise this
 pathname is resolved in a system-dependent way.  On UNIX systems, a
 relative pathname is made absolute by resolving it against the current
 user directory.  On Microsoft Windows systems, a relative pathname is made absolute
 by resolving it against the current directory of the drive named by the
 pathname, if any; if not, it is resolved against the current user
 directory.

**返回**

- The absolute pathname string denoting the same file or directory as this abstract pathname

**参见**

- java.io.File#isAbsolute()
