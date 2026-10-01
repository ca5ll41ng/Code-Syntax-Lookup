---
id: "java-en-function-namecallback-namecallback"
language: "java"
lang: "en"
category: "function"
name: "NameCallback.NameCallback"
signature: "public NameCallback(String prompt)"
title: "NameCallback.NameCallback"
directive: "method"
module: "java.base/javax.security.auth.callback"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/callback/NameCallback.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NameCallback.NameCallback

```java
public NameCallback(String prompt)
```

Construct a `NameCallback` with a prompt.

**参数**

- **prompt** — the prompt used to request the name.

**异常**

- **IllegalArgumentException** — if `prompt` is null or if `prompt` has a length of 0.
