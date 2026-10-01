---
id: "java-en-function-fileinputstream-fileinputstream"
language: "java"
lang: "en"
category: "function"
name: "FileInputStream.FileInputStream"
signature: "public FileInputStream(String name) throws FileNotFoundException"
title: "FileInputStream.FileInputStream"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FileInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileInputStream.FileInputStream

```java
public FileInputStream(String name) throws FileNotFoundException
```

Creates a `FileInputStream` to read from an existing file
 named by the path name `name`.
 `#links Symbolic links`
 are automatically redirected to the target of the link.
 A new `FileDescriptor`
 object is created to represent this file
 connection.
 

 If the named file does not exist, is a directory rather than a regular
 file, or for some other reason cannot be opened for reading then a
 `FileNotFoundException` is thrown.

**参数**

- **name** — the system-dependent file name.

**异常**

- **FileNotFoundException** — if the file does not exist, is a directory rather than a regular file, or for some other reason cannot be opened for reading.
