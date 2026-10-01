---
id: "java-en-function-textinputcallback-textinputcallback"
language: "java"
lang: "en"
category: "function"
name: "TextInputCallback.TextInputCallback"
signature: "public TextInputCallback(String prompt)"
title: "TextInputCallback.TextInputCallback"
directive: "method"
module: "java.base/javax.security.auth.callback"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/callback/TextInputCallback.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TextInputCallback.TextInputCallback

```java
public TextInputCallback(String prompt)
```

Construct a `TextInputCallback` with a prompt.

**参数**

- **prompt** — the prompt used to request the information.

**异常**

- **IllegalArgumentException** — if `prompt` is null or if `prompt` has a length of 0.
