---
id: "java-en-function-filesystemprovider-newfilesystem"
language: "java"
lang: "en"
category: "function"
name: "FileSystemProvider.newFileSystem"
signature: "public abstract FileSystem newFileSystem(URI uri, Map<String,?> env) throws IOException"
title: "FileSystemProvider.newFileSystem"
directive: "method"
module: "java.base/java.nio.file.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/spi/FileSystemProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystemProvider.newFileSystem

```java
public abstract FileSystem newFileSystem(URI uri, Map<String,?> env) throws IOException
```

Constructs a new `FileSystem` object identified by a URI. This
 method is invoked by the `newFileSystem`
 method to open a new file system identified by a URI.

 

 The `uri` parameter is an absolute, hierarchical URI, with a
 scheme equal (without regard to case) to the scheme supported by this
 provider. The exact form of the URI is highly provider dependent. The
 `env` parameter is a map of provider specific properties to configure
 the file system.

 

 This method throws `FileSystemAlreadyExistsException` if the
 file system already exists because it was previously created by an
 invocation of this method. Once a file system is `close closed` it is provider-dependent if the
 provider allows a new file system to be created with the same URI as a
 file system it previously created.

**参数**

- **uri** — URI reference
- **env** — A map of provider specific properties to configure the file system; may be empty

**返回**

- A new file system

**异常**

- **IllegalArgumentException** — If the pre-conditions for the `uri` parameter aren't met, or the `env` parameter does not contain properties required by the provider, or a property value is invalid
- **IOException** — An I/O error occurs creating the file system
- **FileSystemAlreadyExistsException** — If the file system has already been created
