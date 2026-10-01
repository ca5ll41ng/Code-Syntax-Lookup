---
id: "java-en-function-mac-update"
language: "java"
lang: "en"
category: "function"
name: "Mac.update"
signature: "public final void update(byte input) throws IllegalStateException"
title: "Mac.update"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/Mac.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Mac.update

```java
public final void update(byte input) throws IllegalStateException
```

Processes the given byte.

**参数**

- **input** — the input byte to be processed.

**异常**

- **IllegalStateException** — if this `Mac` has not been initialized.
