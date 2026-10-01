---
id: "java-en-function-snimatcher-snimatcher"
language: "java"
lang: "en"
category: "function"
name: "SNIMatcher.SNIMatcher"
signature: "protected SNIMatcher(int type)"
title: "SNIMatcher.SNIMatcher"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SNIMatcher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SNIMatcher.SNIMatcher

```java
protected SNIMatcher(int type)
```

Creates an `SNIMatcher` using the specified server name type.

**参数**

- **type** — the type of the server name that this matcher performs on

**异常**

- **IllegalArgumentException** — if `type` is not in the range of 0 to 255, inclusive.
