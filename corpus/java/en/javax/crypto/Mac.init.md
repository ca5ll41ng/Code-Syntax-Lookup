---
id: "java-en-function-mac-init"
language: "java"
lang: "en"
category: "function"
name: "Mac.init"
signature: "public final void init(Key key) throws InvalidKeyException"
title: "Mac.init"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/Mac.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Mac.init

```java
public final void init(Key key) throws InvalidKeyException
```

Initializes this `Mac` object with the given key.

**参数**

- **key** — the key.

**异常**

- **InvalidKeyException** — if the given key is inappropriate for initializing this MAC.
