---
id: "java-en-function-fileoutputstream-getchannel"
language: "java"
lang: "en"
category: "function"
name: "FileOutputStream.getChannel"
signature: "public FileChannel getChannel()"
title: "FileOutputStream.getChannel"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FileOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileOutputStream.getChannel

```java
public FileChannel getChannel()
```

Returns the unique `java.nio.channels.FileChannel FileChannel`
 object associated with this file output stream.

 

 The initial `position()
 position` of the returned channel will be equal to the
 number of bytes written to the file so far unless this stream is in
 append mode, in which case it will be equal to the size of the file.
 Writing bytes to this stream will increment the channel's position
 accordingly.  Changing the channel's position, either explicitly or by
 writing, will change this stream's file position.

**返回**

- the file channel associated with this file output stream

> *Since 1.4*
