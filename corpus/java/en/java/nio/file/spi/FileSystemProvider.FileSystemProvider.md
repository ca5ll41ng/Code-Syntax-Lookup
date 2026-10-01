---
id: "java-en-function-filesystemprovider-filesystemprovider"
language: "java"
lang: "en"
category: "function"
name: "FileSystemProvider.FileSystemProvider"
signature: "protected FileSystemProvider()"
title: "FileSystemProvider.FileSystemProvider"
directive: "method"
module: "java.base/java.nio.file.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/spi/FileSystemProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystemProvider.FileSystemProvider

```java
protected FileSystemProvider()
```

Initializes a new instance of this class.

 

 During construction a provider may safely access files associated
 with the default provider but care needs to be taken to avoid circular
 loading of other installed providers. If circular loading of installed
 providers is detected then an unspecified error is thrown.
