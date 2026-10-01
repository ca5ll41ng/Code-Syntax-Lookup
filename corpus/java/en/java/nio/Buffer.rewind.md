---
id: "java-en-function-buffer-rewind"
language: "java"
lang: "en"
category: "function"
name: "Buffer.rewind"
signature: "public Buffer rewind()"
title: "Buffer.rewind"
directive: "method"
module: "java.base/java.nio"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/Buffer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Buffer.rewind

```java
public Buffer rewind()
```

Rewinds this buffer.  The position is set to zero and the mark is
 discarded.

 

 Invoke this method before a sequence of channel-write or get
 operations, assuming that the limit has already been set
 appropriately.  For example:

 {@snippet lang=java :
     out.write(buf);    // Write remaining data
     buf.rewind();      // Rewind buffer
     buf.get(array);    // Copy data into array
 }

**返回**

- This buffer
