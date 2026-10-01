---
id: "java-en-function-filesystemexception-filesystemexception"
language: "java"
lang: "en"
category: "function"
name: "FileSystemException.FileSystemException"
signature: "public FileSystemException(String file)"
title: "FileSystemException.FileSystemException"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/FileSystemException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystemException.FileSystemException

```java
public FileSystemException(String file)
```

Constructs an instance of this class. This constructor should be used
 when an operation involving one file fails and there isn't any additional
 information to explain the reason.

**参数**

- **file** — a string identifying the file or `null` if not known.
