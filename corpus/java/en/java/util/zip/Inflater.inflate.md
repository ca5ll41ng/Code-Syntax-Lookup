---
id: "java-en-function-inflater-inflate"
language: "java"
lang: "en"
category: "function"
name: "Inflater.inflate"
signature: "public int inflate(byte[] output, int off, int len) throws DataFormatException"
title: "Inflater.inflate"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/Inflater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Inflater.inflate

```java
public int inflate(byte[] output, int off, int len) throws DataFormatException
```

Uncompresses bytes into specified buffer. Returns actual number
 of bytes uncompressed. A return value of 0 indicates that
 needsInput() or needsDictionary() should be called in order to
 determine if more input data or a preset dictionary is required.
 In the latter case, getAdler() can be used to get the Adler-32
 value of the dictionary required.
 

 If the `setInput` method was called to provide a buffer
 for input, the input buffer's position will be advanced by the number of bytes
 consumed by this operation, even in the event that a `DataFormatException`
 is thrown.
 

 The `getRemaining() remaining byte count` will be reduced by
 the number of consumed input bytes.  If the `setInput`
 method was called to provide a buffer for input, the input buffer's position
 will be advanced the number of consumed bytes.
 

 These byte totals, as well as
 the `getBytesRead() total bytes read`
 and the `getBytesWritten() total bytes written`
 values, will be updated even in the event that a `DataFormatException`
 is thrown to reflect the amount of data consumed and produced before the
 exception occurred.

**参数**

- **output** — the buffer for the uncompressed data
- **off** — the start offset of the data
- **len** — the maximum number of uncompressed bytes

**返回**

- the actual number of uncompressed bytes

**异常**

- **DataFormatException** — if the compressed data format is invalid
- **IllegalStateException** — if the Inflater is closed

**参见**

- Inflater#needsInput
- Inflater#needsDictionary
