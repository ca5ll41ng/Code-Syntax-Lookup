---
id: "java-en-function-filedescriptor-sync"
language: "java"
lang: "en"
category: "function"
name: "FileDescriptor.sync"
signature: "public void sync() throws SyncFailedException"
title: "FileDescriptor.sync"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FileDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileDescriptor.sync

```java
public void sync() throws SyncFailedException
```

Force all system buffers to synchronize with the underlying
 device.  This method returns after all modified data and
 attributes of this FileDescriptor have been written to the
 relevant device(s).  In particular, if this FileDescriptor
 refers to a physical storage medium, such as a file in a file
 system, sync will not return until all in-memory modified copies
 of buffers associated with this FileDescriptor have been
 written to the physical medium.

 sync is meant to be used by code that requires physical
 storage (such as a file) to be in a known state  For
 example, a class that provided a simple transaction facility
 might use sync to ensure that all changes to a file caused
 by a given transaction were recorded on a storage medium.

 sync only affects buffers downstream of this FileDescriptor.  If
 any in-memory buffering is being done by the application (for
 example, by a BufferedOutputStream object), those buffers must
 be flushed into the FileDescriptor (for example, by invoking
 OutputStream.flush) before that data will be affected by sync.

**异常**

- **SyncFailedException** — Thrown when the buffers cannot be flushed, or because the system cannot guarantee that all the buffers have been synchronized with physical media.

> *Since 1.1*
