---
id: "java-en-function-keystorespi-enginecontainsalias"
language: "java"
lang: "en"
category: "function"
name: "KeyStoreSpi.engineContainsAlias"
signature: "public abstract boolean engineContainsAlias(String alias)"
title: "KeyStoreSpi.engineContainsAlias"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStoreSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyStoreSpi.engineContainsAlias

```java
public abstract boolean engineContainsAlias(String alias)
```

Checks if the given alias exists in this keystore.

**参数**

- **alias** — the alias name

**返回**

- `true` if the alias exists, `false` otherwise
