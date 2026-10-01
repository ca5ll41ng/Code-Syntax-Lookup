---
id: "java-en-function-filesystemprovider-installedproviders"
language: "java"
lang: "en"
category: "function"
name: "FileSystemProvider.installedProviders"
signature: "public static List<FileSystemProvider> installedProviders()"
title: "FileSystemProvider.installedProviders"
directive: "method"
module: "java.base/java.nio.file.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/spi/FileSystemProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystemProvider.installedProviders

```java
public static List<FileSystemProvider> installedProviders()
```

Returns a list of the installed file system providers.

 

 The first invocation of this method causes the default provider to be
 initialized (if not already initialized) and loads any other installed
 providers as described by the `FileSystems` class.

**返回**

- An unmodifiable list of the installed file system providers. The list contains at least one element, that is the default file system provider

**异常**

- **ServiceConfigurationError** — When an error occurs while loading a service provider
