---
id: "java-en-function-pathstatus-ishidden"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.isHidden"
signature: "public boolean isHidden()"
title: "PathStatus.isHidden"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.isHidden

```java
public boolean isHidden()
```

Tests whether the file located by this abstract pathname is a hidden
 file.  The exact definition of hidden is system-dependent.  On
 UNIX systems, a file is considered to be hidden if its name begins with
 a period character (`'.'`).  On Microsoft Windows systems, a file
 is considered to be hidden if it has been marked as such in the
 filesystem.

 If the file is a symbolic link, then on UNIX system it is considered to
 be hidden if the name of the link itself, not that of its target, begins
 with a period character.  On Windows systems, a symbolic link is
 considered hidden if its target is so marked in the filesystem.

**返回**

- `true` if and only if the file located by this abstract pathname is hidden according to the conventions of the underlying platform

> *Since 1.2*
