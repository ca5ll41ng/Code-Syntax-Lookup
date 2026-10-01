---
id: "java-en-function-randomaccessfile-getchannel"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.getChannel"
signature: "public final FileChannel getChannel()"
title: "RandomAccessFile.getChannel"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.getChannel

```java
public final FileChannel getChannel()
```

Returns the unique `java.nio.channels.FileChannel FileChannel`
 object associated with this file.

 

 The `position()
 position` of the returned channel will always be equal to
 this object's file-pointer offset as returned by the `getFilePointer getFilePointer` method.  Changing this object's
 file-pointer offset, whether explicitly or by reading or writing bytes,
 will change the position of the channel, and vice versa.  Changing the
 file's length via this object will change the length seen via the file
 channel, and vice versa.

**返回**

- the file channel associated with this file

> *Since 1.4*
