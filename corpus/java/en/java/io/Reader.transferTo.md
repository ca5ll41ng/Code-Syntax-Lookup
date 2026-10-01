---
id: "java-en-function-reader-transferto"
language: "java"
lang: "en"
category: "function"
name: "Reader.transferTo"
signature: "public long transferTo(Writer out) throws IOException"
title: "Reader.transferTo"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/Reader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Reader.transferTo

```java
public long transferTo(Writer out) throws IOException
```

Reads all characters from this reader and writes the characters to the
 given writer in the order that they are read. On return, this reader
 will be at end of the stream. This method does not close either reader
 or writer.
 

 This method may block indefinitely reading from the reader, or
 writing to the writer. The behavior for the case where the reader
 and/or writer is asynchronously closed, or the thread
 interrupted during the transfer, is highly reader and writer
 specific, and therefore not specified.
 

 If the total number of characters transferred is greater than `MAX_VALUE`, then `Long.MAX_VALUE` will be returned.
 

 If an I/O error occurs reading from the reader or writing to the
 writer, then it may do so after some characters have been read or
 written. Consequently the reader may not be at end of the stream and
 one, or both, streams may be in an inconsistent state. It is strongly
 recommended that both streams be promptly closed if an I/O error occurs.

**参数**

- **out** — the writer, non-null

**返回**

- the number of characters transferred

**异常**

- **IOException** — if an I/O error occurs when reading or writing
- **NullPointerException** — if `out` is `null`

> *Since 10*
