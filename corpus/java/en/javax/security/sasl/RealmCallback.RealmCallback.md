---
id: "java-en-function-realmcallback-realmcallback"
language: "java"
lang: "en"
category: "function"
name: "RealmCallback.RealmCallback"
signature: "public RealmCallback(String prompt)"
title: "RealmCallback.RealmCallback"
directive: "method"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/RealmCallback.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RealmCallback.RealmCallback

```java
public RealmCallback(String prompt)
```

Constructs a `RealmCallback` with a prompt.

**参数**

- **prompt** — The non-null prompt to use to request the realm information.

**异常**

- **IllegalArgumentException** — If `prompt` is null or the empty string.
