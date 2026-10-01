---
id: "java-en-function-pathstatus-compareto"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.compareTo"
signature: "public int compareTo(File pathname)"
title: "PathStatus.compareTo"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.compareTo

```java
public int compareTo(File pathname)
```

Compares two abstract pathnames lexicographically.  The ordering
 defined by this method depends upon the underlying system.  On UNIX
 systems, alphabetic case is significant in comparing pathnames; on
 Microsoft Windows systems it is not.  This method only compares the
 abstract pathnames; it does not access the file system and the file is
 not required to exist.

**参数**

- **pathname** — The abstract pathname to be compared to this abstract pathname

**返回**

- Zero if the argument is equal to this abstract pathname, a value less than zero if this abstract pathname is lexicographically less than the argument, or a value greater than zero if this abstract pathname is lexicographically greater than the argument

> *Since 1.2*
