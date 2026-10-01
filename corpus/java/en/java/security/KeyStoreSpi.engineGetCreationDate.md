---
id: "java-en-function-keystorespi-enginegetcreationdate"
language: "java"
lang: "en"
category: "function"
name: "KeyStoreSpi.engineGetCreationDate"
signature: "public abstract Date engineGetCreationDate(String alias)"
title: "KeyStoreSpi.engineGetCreationDate"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStoreSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyStoreSpi.engineGetCreationDate

```java
public abstract Date engineGetCreationDate(String alias)
```

Returns the creation date of the entry identified by the given alias.

**参数**

- **alias** — the alias name

**返回**

- the creation date of this entry, or `null` if the given alias does not exist
