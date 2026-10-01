---
id: "java-en-function-fileoutputstream-fileoutputstream"
language: "java"
lang: "en"
category: "function"
name: "FileOutputStream.FileOutputStream"
signature: "public FileOutputStream(String name) throws FileNotFoundException"
title: "FileOutputStream.FileOutputStream"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FileOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileOutputStream.FileOutputStream

```java
public FileOutputStream(String name) throws FileNotFoundException
```

Creates a file output stream to write to the file with the
 specified name. If the file exists, it is truncated, otherwise a
 new file is created. `#links Symbolic links`
 are automatically redirected to the target of the link.
 A new `FileDescriptor` object is
 created to represent this file connection.
 

 If the file exists but is a directory rather than a regular file, does
 not exist but cannot be created, or cannot be opened for any other
 reason then a `FileNotFoundException` is thrown.

 equivalent to invoking `FileOutputStream(String,boolean)
 new FileOutputStream`.

**参数**

- **name** — the system-dependent filename

**异常**

- **FileNotFoundException** — if the file exists but is a directory rather than a regular file, does not exist but cannot be created, or cannot be opened for any other reason
