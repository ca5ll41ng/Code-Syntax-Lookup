---
id: "java-en-function-simpledateformat-applylocalizedpattern"
language: "java"
lang: "en"
category: "function"
name: "SimpleDateFormat.applyLocalizedPattern"
signature: "public void applyLocalizedPattern(String pattern)"
title: "SimpleDateFormat.applyLocalizedPattern"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/SimpleDateFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SimpleDateFormat.applyLocalizedPattern

```java
public void applyLocalizedPattern(String pattern)
```

Applies the given localized pattern string to this date format.

**参数**

- **pattern** — a String to be mapped to the new date and time format pattern for this format

**异常**

- **NullPointerException** — if the given pattern is null
- **IllegalArgumentException** — if the given pattern is invalid
