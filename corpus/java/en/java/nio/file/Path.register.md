---
id: "java-en-function-path-register"
language: "java"
lang: "en"
category: "function"
name: "Path.register"
signature: "WatchKey register(WatchService watcher, WatchEvent.Kind<?>[] events, WatchEvent.Modifier... modifiers) throws IOException"
title: "Path.register"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Path.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Path.register

```java
WatchKey register(WatchService watcher, WatchEvent.Kind<?>[] events, WatchEvent.Modifier... modifiers) throws IOException
```

Registers the file located by this path with a watch service.

 

 In this release, this path locates a directory that exists. The
 directory is registered with the watch service so that entries in the
 directory can be watched. The `events` parameter is the events to
 register and may contain the following events:
 
   
- `ENTRY_CREATE ENTRY_CREATE` -
       entry created or moved into the directory
   
- `ENTRY_DELETE ENTRY_DELETE` -
        entry deleted or moved out of the directory
   
- `ENTRY_MODIFY ENTRY_MODIFY` -
        entry in directory was modified
 

 

 The `context context` for these events is the
 relative path between the directory located by this path, and the path
 that locates the directory entry that is created, deleted, or modified.

 

 The set of events may include additional implementation specific
 event that are not defined by the enum `StandardWatchEventKinds`

 

 The `modifiers` parameter specifies modifiers that
 qualify how the directory is registered. This release does not define any
 standard modifiers. It may contain implementation specific
 modifiers.

 

 Where a file is registered with a watch service by means of a symbolic
 link then it is implementation specific if the watch continues to depend
 on the existence of the symbolic link after it is registered.

**参数**

- **watcher** — the watch service to which this object is to be registered
- **events** — the events for which this object should be registered
- **modifiers** — the modifiers, if any, that modify how the object is registered

**返回**

- a key representing the registration of this object with the given watch service

**异常**

- **UnsupportedOperationException** — if unsupported events or modifiers are specified
- **IllegalArgumentException** — if an invalid combination of events or modifiers is specified
- **ClosedWatchServiceException** — if the watch service is closed
- **NotDirectoryException** — if the file is registered to watch the entries in a directory and the file is not a directory  (optional specific exception)
- **IOException** — if an I/O error occurs
