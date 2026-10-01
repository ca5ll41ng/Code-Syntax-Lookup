---
id: "java-en-function-randomaccessfile-randomaccessfile"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.RandomAccessFile"
signature: "public RandomAccessFile(String pathname, String mode) throws FileNotFoundException"
title: "RandomAccessFile.RandomAccessFile"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.RandomAccessFile

```java
public RandomAccessFile(String pathname, String mode) throws FileNotFoundException
```

Creates a random access file stream to read from, and optionally
 to write to, a file with the specified pathname. If the file exists
 it is opened; if it does not exist and write mode is specified, a
 new file is created.
 `#links Symbolic links`
 are automatically redirected to the target of the link.
 A new `FileDescriptor` object is created to represent the
 connection to the file.

 

 The `mode` argument specifies the access mode with which the
 file is to be opened.  The permitted values and their meanings are as
 specified for the `RandomAccessFile(File,String)` constructor.

**参数**

- **pathname** — the system-dependent pathname string
- **mode** — the access mode

**异常**

- **IllegalArgumentException** — if the mode argument is not equal to one of `"r"`, `"rw"`, `"rws"`, or `"rwd"`
- **FileNotFoundException** — if the mode is `"r"` but the given pathname string does not denote an existing regular file, or if the mode begins with `"rw"` but the given pathname string does not denote an existing, writable regular file and a new regular file of that pathname cannot be created, or if some other error occurs while opening or creating the file
