---
id: "java-en-function-pathstatus-equals"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.equals"
signature: "public boolean equals(Object obj)"
title: "PathStatus.equals"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.equals

```java
public boolean equals(Object obj)
```

Tests this abstract pathname for equality with the given object.
 Returns `true` if and only if the argument is not
 `null` and is an abstract pathname that is the same as this
 abstract pathname.  Whether or not two abstract
 pathnames are equal depends upon the underlying operating system.
 On UNIX systems, alphabetic case is significant in comparing pathnames;
 on Microsoft Windows systems it is not.  This method only tests whether
 the abstract pathnames are equal; it does not access the file system and
 the file is not required to exist.

**参数**

- **obj** — The object to be compared with this abstract pathname

**返回**

- `true` if and only if the objects are the same; `false` otherwise

**参见**

- #compareTo(File)
- java.nio.file.Files#isSameFile(Path,Path)
