---
id: "java-en-function-datainput-readfully"
language: "java"
lang: "en"
category: "function"
name: "DataInput.readFully"
signature: "void readFully(byte[] b) throws IOException"
title: "DataInput.readFully"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataInput.readFully

```java
void readFully(byte[] b) throws IOException
```

Reads some bytes from an input
 stream and stores them into the buffer
 array `b`. The number of bytes
 read is equal
 to the length of `b`.
 

 This method blocks until one of the
 following conditions occurs:
 
 
- `b.length`
 bytes of input data are available, in which
 case a normal return is made.

 
- End of
 file is detected, in which case an `EOFException`
 is thrown.

 
- An I/O error occurs, in
 which case an `IOException` other
 than `EOFException` is thrown.
 

 

 If `b` is `null`,
 a `NullPointerException` is thrown.
 If `b.length` is zero, then
 no bytes are read. Otherwise, the first
 byte read is stored into element `b[0]`,
 the next one into `b[1]`, and
 so on.
 If an exception is thrown from
 this method, then it may be that some but
 not all bytes of `b` have been
 updated with data from the input stream.

**参数**

- **b** — the buffer into which the data is read.

**异常**

- **NullPointerException** — if `b` is `null`.
- **EOFException** — if this stream reaches the end before reading all the bytes.
- **IOException** — if an I/O error occurs.
