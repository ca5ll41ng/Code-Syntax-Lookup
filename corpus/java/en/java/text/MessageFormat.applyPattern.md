---
id: "java-en-function-messageformat-applypattern"
language: "java"
lang: "en"
category: "function"
name: "MessageFormat.applyPattern"
signature: "public void applyPattern(String pattern)"
title: "MessageFormat.applyPattern"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/MessageFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MessageFormat.applyPattern

```java
public void applyPattern(String pattern)
```

Sets the pattern used by this message format.
 The method parses the pattern and creates a list of subformats
 for the format elements contained in it.
 Patterns and their interpretation are specified in the
 `#patterns class description`.

**参数**

- **pattern** — the pattern for this message format

**异常**

- **IllegalArgumentException** — if the pattern is invalid
- **NullPointerException** — if `pattern` is `null`
