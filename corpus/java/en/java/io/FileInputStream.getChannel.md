---
id: "java-en-function-fileinputstream-getchannel"
language: "java"
lang: "en"
category: "function"
name: "FileInputStream.getChannel"
signature: "public FileChannel getChannel()"
title: "FileInputStream.getChannel"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FileInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileInputStream.getChannel

```java
public FileChannel getChannel()
```

Returns the unique `java.nio.channels.FileChannel FileChannel`
 object associated with this file input stream.

 

 The initial `position()
 position` of the returned channel will be equal to the
 number of bytes read from the file so far.  Reading bytes from this
 stream will increment the channel's position.  Changing the channel's
 position, either explicitly or by reading, will change this stream's
 file position.

**返回**

- the file channel associated with this file input stream

> *Since 1.4*
