---
id: "java-en-function-bufferedinputstream-markpos"
language: "java"
lang: "en"
category: "function"
name: "BufferedInputStream.markpos"
signature: "protected int markpos = -1"
title: "BufferedInputStream.markpos"
directive: "field"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/BufferedInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufferedInputStream.markpos

```java
protected int markpos = -1
```

The value of the `pos` field at the time the last
 `mark` method was called.
 

 This value is always
 in the range `-1` through `pos`.
 If there is no marked position in  the input
 stream, this field is `-1`. If
 there is a marked position in the input
 stream,  then `buf[markpos]`
 is the first byte to be supplied as input
 after a `reset` operation. If
 `markpos` is not `-1`,
 then all bytes from positions `buf[markpos]`
 through  `buf[pos-1]` must remain
 in the buffer array (though they may be
 moved to  another place in the buffer array,
 with suitable adjustments to the values
 of `count`,  `pos`,
 and `markpos`); they may not
 be discarded unless and until the difference
 between `pos` and `markpos`
 exceeds `marklimit`.

**参见**

- java.io.BufferedInputStream#mark(int)
- java.io.BufferedInputStream#pos
