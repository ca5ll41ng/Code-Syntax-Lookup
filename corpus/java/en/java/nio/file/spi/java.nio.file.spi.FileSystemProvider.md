---
id: "java-en-function-java-nio-file-spi-filesystemprovider"
language: "java"
lang: "en"
category: "function"
name: "java.nio.file.spi.FileSystemProvider"
title: "FileSystemProvider"
directive: "type"
module: "java.base/java.nio.file.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/spi/FileSystemProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystemProvider

Service-provider class for file systems. The methods defined by the `java.nio.file.Files` class will typically delegate to an instance of this
 class.

 

 A file system provider is a concrete implementation of this class that
 implements the abstract methods defined by this class. A provider is
 identified by a `URI` `getScheme() scheme`. The default provider
 is identified by the URI scheme "file". It creates the `FileSystem` that
 provides access to the file systems accessible to the Java virtual machine.
 The `FileSystems` class defines how file system providers are located
 and loaded. The default provider is typically a system-default provider but
 may be overridden if the system property {@systemProperty
 java.nio.file.spi.DefaultFileSystemProvider} is set. In that case, the
 provider has a one argument constructor whose formal parameter type is `FileSystemProvider`. All other providers have a zero argument constructor
 that initializes the provider.

 

 A provider is a factory for one or more `FileSystem` instances. Each
 file system is identified by a `URI` where the URI's scheme matches
 the provider's `getScheme scheme`. The default file system, for example,
 is identified by the URI `"file:///"`. A memory-based file system,
 for example, may be identified by a URI such as `"memory:///?name=logfs"`.
 The `newFileSystem newFileSystem` method may be used to create a file
 system, and the `getFileSystem getFileSystem` method may be used to
 obtain a reference to an existing file system created by the provider. Where
 a provider is the factory for a single file system then it is provider dependent
 if the file system is created when the provider is initialized, or later when
 the `newFileSystem` method is invoked. In the case of the default
 provider, the `FileSystem` is created when the provider is initialized.

 

 All of the methods in this class are safe for use by multiple concurrent
 threads.

> *Since 1.7*
