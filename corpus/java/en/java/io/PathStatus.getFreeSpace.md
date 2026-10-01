---
id: "java-en-function-pathstatus-getfreespace"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.getFreeSpace"
signature: "public long getFreeSpace()"
title: "PathStatus.getFreeSpace"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.getFreeSpace

```java
public long getFreeSpace()
```

Returns the number of unallocated bytes in the partition named by this abstract path name.  If the
 number of unallocated bytes in the partition is greater than
 `MAX_VALUE`, then `Long.MAX_VALUE` will be returned.

 

 The returned number of unallocated bytes is a hint, but not
 a guarantee, that it is possible to use most or any of these
 bytes.  The number of unallocated bytes is most likely to be
 accurate immediately after this call.  It is likely to be made
 inaccurate by any external I/O operations including those made
 on the system outside of this virtual machine.  This method
 makes no guarantee that write operations to this file system
 will succeed.

**返回**

- The number of unallocated bytes on the partition or `0L` if the abstract pathname does not name a partition or if this number cannot be obtained.  This value will be less than or equal to the total file system size returned by `getTotalSpace`.

**参见**

- FileStore#getUnallocatedSpace

> *Since 1.6*
