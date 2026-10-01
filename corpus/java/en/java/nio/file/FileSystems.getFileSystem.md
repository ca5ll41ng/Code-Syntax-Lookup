---
id: "java-en-function-filesystems-getfilesystem"
language: "java"
lang: "en"
category: "function"
name: "FileSystems.getFileSystem"
signature: "public static FileSystem getFileSystem(URI uri)"
title: "FileSystems.getFileSystem"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/FileSystems.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystems.getFileSystem

```java
public static FileSystem getFileSystem(URI uri)
```

Returns a reference to an existing `FileSystem`.

 

 This method iterates over the `installedProviders()
 installed` providers to locate the provider that is identified by the URI
 `getScheme scheme` of the given URI. URI schemes are compared
 without regard to case. The exact form of the URI is highly provider
 dependent. If found, the provider's `getFileSystem
 getFileSystem` method is invoked to obtain a reference to the `FileSystem`.

 

 Once a file system created by this provider is `close
 closed` it is provider-dependent if this method returns a reference to
 the closed file system or throws `FileSystemNotFoundException`.
 If the provider allows a new file system to be created with the same URI
 as a file system it previously created then this method throws the
 exception if invoked after the file system is closed (and before a new
 instance is created by the `newFileSystem newFileSystem` method).

**参数**

- **uri** — the URI to locate the file system

**返回**

- the reference to the file system

**异常**

- **IllegalArgumentException** — if the pre-conditions for the `uri` parameter are not met
- **FileSystemNotFoundException** — if the file system, identified by the URI, does not exist
- **ProviderNotFoundException** — if a provider supporting the URI scheme is not installed
