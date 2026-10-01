---
id: "java-en-function-chararrayreader-skip"
language: "java"
lang: "en"
category: "function"
name: "CharArrayReader.skip"
signature: "public long skip(long n) throws IOException"
title: "CharArrayReader.skip"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/CharArrayReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharArrayReader.skip

```java
public long skip(long n) throws IOException
```

Skips characters. If the stream is already at its end before this method
 is invoked, then no characters are skipped and zero is returned.

 

The `n` parameter may be negative, even though the
 `skip` method of the `Reader` superclass throws
 an exception in this case. If `n` is negative, then
 this method does nothing and returns `0`.

**参数**

- **n** — {@inheritDoc}

**返回**

- {@inheritDoc}

**异常**

- **IOException** — {@inheritDoc}
