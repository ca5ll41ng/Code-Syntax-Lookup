---
id: "java-en-function-filterreader-skip"
language: "java"
lang: "en"
category: "function"
name: "FilterReader.skip"
signature: "public long skip(long n) throws IOException"
title: "FilterReader.skip"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FilterReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FilterReader.skip

```java
public long skip(long n) throws IOException
```

{@inheritDoc}

**异常**

- **IllegalArgumentException** — If `n` is negative and the contained `Reader`'s `skip` method throws an IllegalArgumentException for a negative parameter
