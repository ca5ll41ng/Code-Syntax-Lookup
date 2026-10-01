---
id: "java-en-function-securerandom-nextbytes"
language: "java"
lang: "en"
category: "function"
name: "SecureRandom.nextBytes"
signature: "public void nextBytes(byte[] bytes)"
title: "SecureRandom.nextBytes"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SecureRandom.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureRandom.nextBytes

```java
public void nextBytes(byte[] bytes)
```

Generates a user-specified number of random bytes.

**参数**

- **bytes** — the array to be filled in with random bytes.

**异常**

- **NullPointerException** — if `bytes` is `null`
