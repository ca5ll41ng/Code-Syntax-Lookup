---
id: "java-en-function-buffer-flip"
language: "java"
lang: "en"
category: "function"
name: "Buffer.flip"
signature: "public Buffer flip()"
title: "Buffer.flip"
directive: "method"
module: "java.base/java.nio"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/Buffer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Buffer.flip

```java
public Buffer flip()
```

Flips this buffer.  The limit is set to the current position and then
 the position is set to zero.  If the mark is defined then it is
 discarded.

 

 After a sequence of channel-read or put operations, invoke
 this method to prepare for a sequence of channel-write or relative
 get operations.  For example:

 {@snippet lang=java :
     buf.put(magic);    // Prepend header
     in.read(buf);      // Read data into rest of buffer
     buf.flip();        // Flip buffer
     out.write(buf);    // Write header + data to channel
 }

 

 This method is often used in conjunction with the `compact compact` method when transferring data from
 one place to another.

**返回**

- This buffer
