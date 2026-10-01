---
id: "java-en-function-simpledateformat-applypattern"
language: "java"
lang: "en"
category: "function"
name: "SimpleDateFormat.applyPattern"
signature: "public void applyPattern(String pattern)"
title: "SimpleDateFormat.applyPattern"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/SimpleDateFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SimpleDateFormat.applyPattern

```java
public void applyPattern(String pattern)
```

Applies the given pattern string to this date format.

**参数**

- **pattern** — the new date and time pattern for this date format

**异常**

- **NullPointerException** — if the given pattern is null
- **IllegalArgumentException** — if the given pattern is invalid
