---
id: "java-en-function-filesystemprovider-getfilesystem"
language: "java"
lang: "en"
category: "function"
name: "FileSystemProvider.getFileSystem"
signature: "public abstract FileSystem getFileSystem(URI uri)"
title: "FileSystemProvider.getFileSystem"
directive: "method"
module: "java.base/java.nio.file.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/spi/FileSystemProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystemProvider.getFileSystem

```java
public abstract FileSystem getFileSystem(URI uri)
```

Returns an existing `FileSystem` created by this provider.

 

 This method returns a reference to a `FileSystem` that was
 created by invoking the `newFileSystem`
 method. File systems created by the `newFileSystem(Path,Map)
 newFileSystem` method are not returned by this method.
 The file system is identified by its `URI`. Its exact form
 is highly provider dependent. In the case of the default provider the URI's
 path component is `"/"` and the authority, query and fragment components
 are undefined (Undefined components are represented by `null`).

 

 Once a file system created by this provider is `close closed` it is provider-dependent if this
 method returns a reference to the closed file system or throws `FileSystemNotFoundException`. If the provider allows a new file system to
 be created with the same URI as a file system it previously created then
 this method throws the exception if invoked after the file system is
 closed (and before a new instance is created by the `newFileSystem
 newFileSystem` method).

**参数**

- **uri** — URI reference

**返回**

- The file system

**异常**

- **IllegalArgumentException** — If the pre-conditions for the `uri` parameter aren't met
- **FileSystemNotFoundException** — If the file system does not exist
