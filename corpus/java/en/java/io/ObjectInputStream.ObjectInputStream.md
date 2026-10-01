---
id: "java-en-function-objectinputstream-objectinputstream"
language: "java"
lang: "en"
category: "function"
name: "ObjectInputStream.ObjectInputStream"
signature: "public ObjectInputStream(InputStream in) throws IOException"
title: "ObjectInputStream.ObjectInputStream"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectInputStream.ObjectInputStream

```java
public ObjectInputStream(InputStream in) throws IOException
```

Creates an ObjectInputStream that reads from the specified InputStream.
 A serialization stream header is read from the stream and verified.
 This constructor will block until the corresponding ObjectOutputStream
 has written and flushed the header.

 

The constructor initializes the deserialization filter to the filter returned
 by invoking the serial filter factory returned from `getSerialFilterFactory`
 with `null` for the current filter
 and the `getSerialFilter() static JVM-wide filter` for the requested filter.
 If the serial filter or serial filter factory properties are invalid
 an `IllegalStateException` is thrown.
 When the filter factory `apply` method is invoked it may throw a runtime exception
 preventing the `ObjectInputStream` from being constructed.

**参数**

- **in** — input stream to read from

**异常**

- **StreamCorruptedException** — if the stream header is incorrect
- **IOException** — if an I/O error occurs while reading stream header
- **IllegalStateException** — if the initialization of `ObjectInputFilter.Config` fails due to invalid serial filter or serial filter factory properties.
- **NullPointerException** — if `in` is `null`

**参见**

- ObjectInputStream#ObjectInputStream()
- ObjectInputStream#readFields()
- ObjectOutputStream#ObjectOutputStream(OutputStream)
