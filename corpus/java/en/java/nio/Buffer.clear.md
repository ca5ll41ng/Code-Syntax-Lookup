---
id: "java-en-function-buffer-clear"
language: "java"
lang: "en"
category: "function"
name: "Buffer.clear"
signature: "public Buffer clear()"
title: "Buffer.clear"
directive: "method"
module: "java.base/java.nio"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/Buffer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Buffer.clear

```java
public Buffer clear()
```

Clears this buffer.  The position is set to zero, the limit is set to
 the capacity, and the mark is discarded.

 

 Invoke this method before using a sequence of channel-read or
 put operations to fill this buffer.  For example:

 {@snippet lang=java :
     buf.clear();     // Prepare buffer for reading
     in.read(buf);    // Read data
 }

 

 This method does not actually erase the data in the buffer, but it
 is named as if it did because it will most often be used in situations
 in which that might as well be the case.

**返回**

- This buffer
