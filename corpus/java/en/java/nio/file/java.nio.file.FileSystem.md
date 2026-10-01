---
id: "java-en-function-java-nio-file-filesystem"
language: "java"
lang: "en"
category: "function"
name: "java.nio.file.FileSystem"
title: "FileSystem"
directive: "type"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/FileSystem.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystem

Provides an interface to a file system and is the factory for objects to
 access files and other objects in the file system.

 

 The default file system, obtained by invoking the `getDefault
 FileSystems.getDefault` method, provides access to the file system that is
 accessible to the Java virtual machine. The `FileSystems` class defines
 methods to create file systems that provide access to other types of (custom)
 file systems.

 

 A file system is the factory for several types of objects:

 
   
- 

 The `getPath getPath` method converts a system dependent
     path string, returning a `Path` object that may be used
     to locate and access a file. 
   
- 

 The `getPathMatcher  getPathMatcher` method is used
     to create a `PathMatcher` that performs match operations on
     paths. 
   
- 

 The `getFileStores getFileStores` method returns an iterator
     over the underlying `FileStore file-stores`. 
   
- 

 The `getUserPrincipalLookupService getUserPrincipalLookupService`
     method returns the `UserPrincipalLookupService` to lookup users or
     groups by name. 
   
- 

 The `newWatchService newWatchService` method creates a
     `WatchService` that may be used to watch objects for changes and
     events. 
 

 

 File systems vary greatly. In some cases the file system is a single
 hierarchy of files with one top-level root directory. In other cases it may
 have several distinct file hierarchies, each with its own top-level root
 directory. The `getRootDirectories getRootDirectories` method may be
 used to iterate over the root directories in the file system. A file system
 is typically composed of one or more underlying `FileStore file-stores`
 that provide the storage for the files. These file stores can also vary in
 the features they support, and the file attributes or meta-data that
 they associate with files.

 

 A file system is open upon creation and can be closed by invoking its
 `close() close` method. Once closed, any further attempt to access
 objects in the file system cause `ClosedFileSystemException` to be
 thrown. File systems created by the default `FileSystemProvider provider`
 cannot be closed.

 

 A `FileSystem` can provide read-only or read-write access to the
 file system. Whether or not a file system provides read-only access is
 established when the `FileSystem` is created and can be tested by invoking
 its `isReadOnly() isReadOnly` method. Attempts to write to file stores
 by means of an object associated with a read-only file system throws `ReadOnlyFileSystemException`.

 

 File systems are safe for use by multiple concurrent threads. The `close close` method may be invoked at any time to close a file system but
 whether a file system is asynchronously closeable is provider specific
 and therefore unspecified. In other words, if a thread is accessing an
 object in a file system, and another thread invokes the `close` method
 then it may require to block until the first operation is complete. Closing
 a file system causes all open channels, watch services, and other `Closeable closeable` objects associated with the file system to be closed.

> *Since 1.7*
