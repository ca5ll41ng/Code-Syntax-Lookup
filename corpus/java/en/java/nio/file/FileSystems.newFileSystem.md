---
id: "java-en-function-filesystems-newfilesystem"
language: "java"
lang: "en"
category: "function"
name: "FileSystems.newFileSystem"
signature: "public static FileSystem newFileSystem(URI uri, Map<String,?> env) throws IOException"
title: "FileSystems.newFileSystem"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/FileSystems.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystems.newFileSystem

```java
public static FileSystem newFileSystem(URI uri, Map<String,?> env) throws IOException
```

Constructs a new file system that is identified by a `URI`

 

 This method iterates over the `installedProviders()
 installed` providers to locate the provider that is identified by the URI
 `getScheme scheme` of the given URI. URI schemes are compared
 without regard to case. The exact form of the URI is highly provider
 dependent. If found, the provider's `newFileSystem(URI,Map)
 newFileSystem` method is invoked to construct the new file system.

 

 Once a file system is `close closed` it is
 provider-dependent if the provider allows a new file system to be created
 with the same URI as a file system it previously created.

 

 **Usage Example:**
 Suppose there is a provider identified by the scheme `"memory"`
 installed:
 {@snippet lang=java :
     FileSystem fs = FileSystems.newFileSystem(URI.create("memory:///?name=logfs"),
                                               Map.of("capacity", "16G", "blockSize", "4k"));
 }

**参数**

- **uri** — the URI identifying the file system
- **env** — a map of provider specific properties to configure the file system; may be empty

**返回**

- a new file system

**异常**

- **IllegalArgumentException** — if the pre-conditions for the `uri` parameter are not met, or if the `env` parameter does not contain properties required by the provider, contains an invalid combination of properties and values, or contains an invalid property value
- **FileSystemAlreadyExistsException** — if the file system has already been created
- **ProviderNotFoundException** — if a provider supporting the URI scheme is not installed
- **IOException** — if an I/O error occurs creating the file system
