---
id: "java-en-function-filesystem-getfilestores"
language: "java"
lang: "en"
category: "function"
name: "FileSystem.getFileStores"
signature: "public abstract Iterable<FileStore> getFileStores()"
title: "FileSystem.getFileStores"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/FileSystem.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystem.getFileStores

```java
public abstract Iterable<FileStore> getFileStores()
```

Returns an object to iterate over the underlying file stores.

 

 The elements of the returned iterator are the `FileStore FileStores` for this file system. The order of the elements is
 not defined and the file stores may change during the lifetime of the
 Java virtual machine. When an I/O error occurs, perhaps because a file
 store is not accessible, then it is not returned by the iterator.

 

 **Usage Example:**
 Suppose we want to print the space usage for all file stores:
 {@snippet lang=java :
     for (FileStore store: FileSystems.getDefault().getFileStores()) {
         long total = store.getTotalSpace() / 1024;
         long used = (store.getTotalSpace() - store.getUnallocatedSpace()) / 1024;
         long avail = store.getUsableSpace() / 1024;
         System.out.format("%-20s %12d %12d %12d%n", store, total, used, avail);
     }
 }

**返回**

- An object to iterate over the backing file stores
