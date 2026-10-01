---
id: "java-en-function-pathstatus-deleteonexit"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.deleteOnExit"
signature: "public void deleteOnExit()"
title: "PathStatus.deleteOnExit"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.deleteOnExit

```java
public void deleteOnExit()
```

Requests that the file or directory located by this abstract
 pathname be deleted when the virtual machine terminates.
 If this pathname locates a symbolic link, then the
 link itself, not its target, will be deleted.
 Files (or directories) are deleted in the reverse order that
 they are registered. Invoking this method to delete a file or
 directory that is already registered for deletion has no effect.
 Deletion will be attempted only for normal termination of the
 virtual machine, as defined by the Java Language Specification.

 

 Once deletion has been requested, it is not possible to cancel the
 request.  This method should therefore be used with care.

 

 Note: this method should not be used for file-locking, as
 the resulting protocol cannot be made to work reliably. The
 `java.nio.channels.FileLock FileLock`
 facility should be used instead.

**参见**

- #delete

> *Since 1.2*
