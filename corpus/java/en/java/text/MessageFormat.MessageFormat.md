---
id: "java-en-function-messageformat-messageformat"
language: "java"
lang: "en"
category: "function"
name: "MessageFormat.MessageFormat"
signature: "public MessageFormat(String pattern)"
title: "MessageFormat.MessageFormat"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/MessageFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MessageFormat.MessageFormat

```java
public MessageFormat(String pattern)
```

Constructs a MessageFormat for the default
 `FORMAT FORMAT` locale and the
 specified pattern.
 The constructor first sets the locale, then parses the pattern and
 creates a list of subformats for the format elements contained in it.
 Patterns and their interpretation are specified in the
 `#patterns class description`.

**参数**

- **pattern** — the pattern for this message format

**异常**

- **IllegalArgumentException** — if the pattern is invalid
- **NullPointerException** — if `pattern` is `null`
