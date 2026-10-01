---
id: "java-en-function-java-nio-file-filesystems"
language: "java"
lang: "en"
category: "function"
name: "java.nio.file.FileSystems"
title: "FileSystems"
directive: "type"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/FileSystems.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystems

Factory methods for file systems. This class defines the `getDefault
 getDefault` method to get the default file system and factory methods to
 construct other types of file systems.

 

 The first invocation of any of the methods defined by this class causes
 the default `FileSystemProvider provider` to be loaded. The default
 provider, identified by the URI scheme "file", creates the `FileSystem`
 that provides access to the file systems accessible to the Java virtual
 machine. If the process of loading or initializing the default provider fails
 then an unspecified error is thrown.

 

 The first invocation of the `installedProviders()
 installedProviders` method, by way of invoking any of the `newFileSystem` methods defined by this class, locates and loads all
 installed file system providers. Installed providers are loaded using the
 service-provider loading facility defined by the `ServiceLoader` class.
 Installed providers are loaded using the system class loader. If the
 system class loader cannot be found then the platform class loader is used.
 Providers are typically installed by placing them in a JAR file on the
 application class path, the JAR file contains a
 provider-configuration file named `java.nio.file.spi.FileSystemProvider`
 in the resource directory `META-INF/services`, and the file lists one or
 more fully-qualified names of concrete subclass of `FileSystemProvider`
 that have a zero argument constructor.
 The ordering that installed providers are located is implementation specific.
 If a provider is instantiated and its `getScheme()
 getScheme` returns the same URI scheme of a provider that was previously
 instantiated then the most recently instantiated duplicate is discarded. URI
 schemes are compared without regard to case. During construction a provider
 may safely access files associated with the default provider but care needs
 to be taken to avoid circular loading of other installed providers. If
 circular loading of installed providers is detected then an unspecified error
 is thrown.

 

 This class also defines factory methods that allow a `ClassLoader`
 to be specified when locating a provider. As with installed providers, the
 provider classes are identified by placing the provider configuration file
 in the resource directory `META-INF/services`.

 

 If a thread initiates the loading of the installed file system providers
 and another thread invokes a method that also attempts to load the providers
 then the method will block until the loading completes.

> *Since 1.7*
