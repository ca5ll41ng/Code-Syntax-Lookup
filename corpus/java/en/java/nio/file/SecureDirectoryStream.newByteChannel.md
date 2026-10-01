---
id: "java-en-function-securedirectorystream-newbytechannel"
language: "java"
lang: "en"
category: "function"
name: "SecureDirectoryStream.newByteChannel"
signature: "SeekableByteChannel newByteChannel(T path, Set<? extends OpenOption> options, FileAttribute<?>... attrs) throws IOException"
title: "SecureDirectoryStream.newByteChannel"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/SecureDirectoryStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureDirectoryStream.newByteChannel

```java
SeekableByteChannel newByteChannel(T path, Set<? extends OpenOption> options, FileAttribute<?>... attrs) throws IOException
```

Opens or creates a file in this directory, returning a seekable byte
 channel to access the file.

 

 This method works in exactly the manner specified by the `newByteChannel Files.newByteChannel` method for the
 case that the `path` parameter is an `isAbsolute absolute`
 path. When the parameter is a relative path then the file to open or
 create is relative to this open directory. In addition to the options
 defined by the `Files.newByteChannel` method, the `NOFOLLOW_LINKS NOFOLLOW_LINKS` option may be used to
 ensure that this method fails if the file is a symbolic link.

 

 The channel, once created, is not dependent upon the directory stream
 used to create it. Closing this directory stream has no effect upon the
 channel.

**参数**

- **path** — the path of the file to open or create
- **options** — options specifying how the file is opened
- **attrs** — an optional list of attributes to set atomically when creating the file

**返回**

- the seekable byte channel

**异常**

- **ClosedDirectoryStreamException** — if the directory stream is closed
- **IllegalArgumentException** — if the set contains an invalid combination of options
- **UnsupportedOperationException** — if an unsupported open option is specified or the array contains attributes that cannot be set atomically when creating the file
- **FileAlreadyExistsException** — if a file of that name already exists and the `CREATE_NEW CREATE_NEW` option is specified (optional specific exception)
- **IOException** — if an I/O error occurs
