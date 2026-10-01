---
id: "java-en-function-securerandom-reseed"
language: "java"
lang: "en"
category: "function"
name: "SecureRandom.reseed"
signature: "public void reseed()"
title: "SecureRandom.reseed"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SecureRandom.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureRandom.reseed

```java
public void reseed()
```

Reseeds this `SecureRandom` with entropy input read from its
 entropy source.

**异常**

- **UnsupportedOperationException** — if the underlying provider implementation has not overridden this method.

> *Since 9*
