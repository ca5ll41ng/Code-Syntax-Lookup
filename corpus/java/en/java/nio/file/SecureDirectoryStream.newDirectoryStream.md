---
id: "java-en-function-securedirectorystream-newdirectorystream"
language: "java"
lang: "en"
category: "function"
name: "SecureDirectoryStream.newDirectoryStream"
signature: "SecureDirectoryStream<T> newDirectoryStream(T path, LinkOption... options) throws IOException"
title: "SecureDirectoryStream.newDirectoryStream"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/SecureDirectoryStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureDirectoryStream.newDirectoryStream

```java
SecureDirectoryStream<T> newDirectoryStream(T path, LinkOption... options) throws IOException
```

Opens the directory identified by the given path, returning a `SecureDirectoryStream` to iterate over the entries in the directory.

 

 This method works in exactly the manner specified by the `newDirectoryStream(Path) newDirectoryStream` method for the case that
 the `path` parameter is an `isAbsolute absolute` path.
 When the parameter is a relative path then the directory to open is
 relative to this open directory. The `NOFOLLOW_LINKS NOFOLLOW_LINKS` option may be used to
 ensure that this method fails if the file is a symbolic link.

 

 The new directory stream, once created, is not dependent upon the
 directory stream used to create it. Closing this directory stream has no
 effect upon newly created directory stream.

**参数**

- **path** — the path to the directory to open
- **options** — options indicating how symbolic links are handled

**返回**

- a new and open `SecureDirectoryStream` object

**异常**

- **ClosedDirectoryStreamException** — if the directory stream is closed
- **NotDirectoryException** — if the file could not otherwise be opened because it is not a directory (optional specific exception)
- **IOException** — if an I/O error occurs
