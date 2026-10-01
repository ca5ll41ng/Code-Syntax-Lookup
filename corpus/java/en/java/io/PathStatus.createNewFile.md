---
id: "java-en-function-pathstatus-createnewfile"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.createNewFile"
signature: "public boolean createNewFile() throws IOException"
title: "PathStatus.createNewFile"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.createNewFile

```java
public boolean createNewFile() throws IOException
```

Atomically creates a new, empty file named by this abstract pathname if
 and only if a file with this name does not yet exist.  The check for the
 existence of the file and the creation of the file if it does not exist
 are a single operation that is atomic with respect to all other
 filesystem activities that might affect the file.
 

 Note: this method should not be used for file-locking, as
 the resulting protocol cannot be made to work reliably. The
 `java.nio.channels.FileLock FileLock`
 facility should be used instead.

**返回**

- `true` if the named file does not exist and was successfully created; `false` if the named file already exists, including if it is a symbolic link

**异常**

- **IOException** — If an I/O error occurred

> *Since 1.2*
