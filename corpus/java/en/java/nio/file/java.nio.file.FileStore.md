---
id: "java-en-function-java-nio-file-filestore"
language: "java"
lang: "en"
category: "function"
name: "java.nio.file.FileStore"
title: "FileStore"
directive: "type"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/FileStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileStore

Storage for files. A `FileStore` represents a storage pool, device,
 partition, volume, concrete file system or other implementation specific means
 of file storage. The `FileStore` for where a file is stored is obtained
 by invoking the `getFileStore getFileStore` method, or all file
 stores can be enumerated by invoking the `getFileStores
 getFileStores` method.

 

 In addition to the methods defined by this class, a file store may support
 one or more `FileStoreAttributeView FileStoreAttributeView` classes
 that provide a read-only or updatable view of a set of file store attributes.

> *Since 1.7*
