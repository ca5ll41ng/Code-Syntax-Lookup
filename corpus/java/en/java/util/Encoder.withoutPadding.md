---
id: "java-en-function-encoder-withoutpadding"
language: "java"
lang: "en"
category: "function"
name: "Encoder.withoutPadding"
signature: "public Encoder withoutPadding()"
title: "Encoder.withoutPadding"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Base64.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Encoder.withoutPadding

```java
public Encoder withoutPadding()
```

Returns an encoder instance that encodes equivalently to this one,
 but without adding any padding character at the end of the encoded
 byte data.

 

 The encoding scheme of this encoder instance is unaffected by
 this invocation. The returned encoder instance should be used for
 non-padding encoding operation.

**返回**

- an equivalent encoder that encodes without adding any padding character at the end
