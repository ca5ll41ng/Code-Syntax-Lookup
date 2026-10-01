---
id: "java-en-function-passwordcallback-passwordcallback"
language: "java"
lang: "en"
category: "function"
name: "PasswordCallback.PasswordCallback"
signature: "public PasswordCallback(String prompt, boolean echoOn)"
title: "PasswordCallback.PasswordCallback"
directive: "method"
module: "java.base/javax.security.auth.callback"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/callback/PasswordCallback.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PasswordCallback.PasswordCallback

```java
public PasswordCallback(String prompt, boolean echoOn)
```

Construct a `PasswordCallback` with a prompt
 and a boolean specifying whether the password should be displayed
 as it is being typed.

**参数**

- **prompt** — the prompt used to request the password.
- **echoOn** — true if the password should be displayed as it is being typed.

**异常**

- **IllegalArgumentException** — if `prompt` is null or if `prompt` has a length of 0.
