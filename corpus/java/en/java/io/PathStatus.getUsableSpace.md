---
id: "java-en-function-pathstatus-getusablespace"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.getUsableSpace"
signature: "public long getUsableSpace()"
title: "PathStatus.getUsableSpace"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.getUsableSpace

```java
public long getUsableSpace()
```

Returns the number of bytes available to this virtual machine on the
 partition named by this abstract pathname.  If
 the number of available bytes in the partition is greater than
 `MAX_VALUE`, then `Long.MAX_VALUE` will be returned.
 When possible, this method checks for write permissions and other
 operating system restrictions and will therefore usually provide a more
 accurate estimate of how much new data can actually be written than
 `getFreeSpace`.

 

 The returned number of available bytes is a hint, but not a
 guarantee, that it is possible to use most or any of these bytes.  The
 number of available bytes is most likely to be accurate immediately
 after this call.  It is likely to be made inaccurate by any external
 I/O operations including those made on the system outside of this
 virtual machine.  This method makes no guarantee that write operations
 to this file system will succeed.

**返回**

- The number of available bytes on the partition or `0L` if the abstract pathname does not name a partition or if this number cannot be obtained.  On systems where this information is not available, this method will be equivalent to a call to `getFreeSpace`.

**参见**

- FileStore#getUsableSpace

> *Since 1.6*
