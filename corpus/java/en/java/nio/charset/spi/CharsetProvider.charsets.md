---
id: "java-en-function-charsetprovider-charsets"
language: "java"
lang: "en"
category: "function"
name: "CharsetProvider.charsets"
signature: "public abstract Iterator<Charset> charsets()"
title: "CharsetProvider.charsets"
directive: "method"
module: "java.base/java.nio.charset.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/charset/spi/CharsetProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharsetProvider.charsets

```java
public abstract Iterator<Charset> charsets()
```

Creates an iterator that iterates over the charsets supported by this
 provider.  This method is used in the implementation of the `availableCharsets Charset.availableCharsets`
 method.

**返回**

- The new iterator
