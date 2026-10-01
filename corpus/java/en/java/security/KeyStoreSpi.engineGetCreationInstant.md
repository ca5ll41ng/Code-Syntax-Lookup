---
id: "java-en-function-keystorespi-enginegetcreationinstant"
language: "java"
lang: "en"
category: "function"
name: "KeyStoreSpi.engineGetCreationInstant"
signature: "public Instant engineGetCreationInstant(String alias)"
title: "KeyStoreSpi.engineGetCreationInstant"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStoreSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyStoreSpi.engineGetCreationInstant

```java
public Instant engineGetCreationInstant(String alias)
```

Returns the instant that the entry identified by the given alias was
 created.

 instant.

 The default implementation calls `engineGetCreationDate(alias)`
 and returns the output as an `Instant` value.

**参数**

- **alias** — the alias name

**返回**

- the instant that the entry identified by the given alias was created, or `null` if the given alias does not exist

> *Since 27*
