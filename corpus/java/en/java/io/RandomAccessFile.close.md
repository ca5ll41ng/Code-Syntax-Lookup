---
id: "java-en-function-randomaccessfile-close"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.close"
signature: "public void close() throws IOException"
title: "RandomAccessFile.close"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.close

```java
public void close() throws IOException
```

Closes this random access file stream and releases any system
 resources associated with the stream. A closed random access
 file cannot perform input or output operations and cannot be
 reopened.

 

 If this file has an associated channel then the channel is closed
 as well.

 If this stream has an associated channel then this method will close the
 channel, which in turn will close this stream. Subclasses that override
 this method should be prepared to handle possible reentrant invocation.

**异常**

- **IOException** — if an I/O error occurs.
