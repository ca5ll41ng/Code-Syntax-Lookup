---
id: "java-en-function-snimatcher-matches"
language: "java"
lang: "en"
category: "function"
name: "SNIMatcher.matches"
signature: "public abstract boolean matches(SNIServerName serverName)"
title: "SNIMatcher.matches"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SNIMatcher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SNIMatcher.matches

```java
public abstract boolean matches(SNIServerName serverName)
```

Attempts to match the given `SNIServerName`.

**参数**

- **serverName** — the `SNIServerName` instance on which this matcher performs match operations

**返回**

- `true` if, and only if, the matcher matches the given `serverName`

**异常**

- **NullPointerException** — if `serverName` is `null`
- **IllegalArgumentException** — if `serverName` is not of the given server name type of this matcher

**参见**

- SNIServerName
