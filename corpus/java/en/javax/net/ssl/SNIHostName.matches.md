---
id: "java-en-function-snihostname-matches"
language: "java"
lang: "en"
category: "function"
name: "SNIHostName.matches"
signature: "public boolean matches(SNIServerName serverName)"
title: "SNIHostName.matches"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SNIHostName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SNIHostName.matches

```java
public boolean matches(SNIServerName serverName)
```

Attempts to match the given `SNIServerName`.

**参数**

- **serverName** — the `SNIServerName` instance on which this matcher performs match operations

**返回**

- `true` if, and only if, the matcher matches the given `serverName`

**异常**

- **NullPointerException** — if `serverName` is `null`
- **IllegalArgumentException** — if `serverName` is not of `StandardConstants#SNI_HOST_NAME` type

**参见**

- SNIServerName
