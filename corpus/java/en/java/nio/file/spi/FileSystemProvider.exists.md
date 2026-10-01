---
id: "java-en-function-filesystemprovider-exists"
language: "java"
lang: "en"
category: "function"
name: "FileSystemProvider.exists"
signature: "public boolean exists(Path path, LinkOption... options)"
title: "FileSystemProvider.exists"
directive: "method"
module: "java.base/java.nio.file.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/spi/FileSystemProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystemProvider.exists

```java
public boolean exists(Path path, LinkOption... options)
```

Tests whether a file exists. This method works in exactly the
 manner specified by the `exists` method.

 The default implementation of this method invokes the
 `checkAccess` method when symbolic links
 are followed. If the option `NOFOLLOW_LINKS NOFOLLOW_LINKS`
 is present then symbolic links are not followed and the method
 `readAttributes` is called
 to determine whether a file exists.

**参数**

- **path** — the path to the file to test
- **options** — options indicating how symbolic links are handled

**返回**

- `true` if the file exists; `false` if the file does not exist or its existence cannot be determined.

> *Since 20*
