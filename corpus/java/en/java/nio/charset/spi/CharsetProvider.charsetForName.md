---
id: "java-en-function-charsetprovider-charsetforname"
language: "java"
lang: "en"
category: "function"
name: "CharsetProvider.charsetForName"
signature: "public abstract Charset charsetForName(String charsetName)"
title: "CharsetProvider.charsetForName"
directive: "method"
module: "java.base/java.nio.charset.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/charset/spi/CharsetProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharsetProvider.charsetForName

```java
public abstract Charset charsetForName(String charsetName)
```

Retrieves a charset for the given charset name.

**参数**

- **charsetName** — The name of the requested charset; may be either a canonical name or an alias

**返回**

- A charset object for the named charset, or `null` if the named charset is not supported by this provider
