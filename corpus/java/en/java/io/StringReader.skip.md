---
id: "java-en-function-stringreader-skip"
language: "java"
lang: "en"
category: "function"
name: "StringReader.skip"
signature: "public long skip(long n) throws IOException"
title: "StringReader.skip"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/StringReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringReader.skip

```java
public long skip(long n) throws IOException
```

Skips characters. If the stream is already at its end before this method
 is invoked, then no characters are skipped and zero is returned.

 

The `n` parameter may be negative, even though the
 `skip` method of the `Reader` superclass throws
 an exception in this case. Negative values of `n` cause the
 stream to skip backwards. Negative return values indicate a skip
 backwards. It is not possible to skip backwards past the beginning of
 the string.

 

If the entire string has been read or skipped, then this method has
 no effect and always returns `0`.

**参数**

- **n** — {@inheritDoc}

**返回**

- {@inheritDoc}

**异常**

- **IOException** — {@inheritDoc}
