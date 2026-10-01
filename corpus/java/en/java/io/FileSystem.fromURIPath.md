---
id: "java-en-function-filesystem-fromuripath"
language: "java"
lang: "en"
category: "function"
name: "FileSystem.fromURIPath"
signature: "public abstract String fromURIPath(String path)"
title: "FileSystem.fromURIPath"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FileSystem.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystem.fromURIPath

```java
public abstract String fromURIPath(String path)
```

Post-process the given URI path string if necessary.  This is used on
 win32, e.g., to transform "/c:/foo" into "c:/foo".  The path string
 still has slash separators; code in the File class will translate them
 after this method returns.
