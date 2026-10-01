---
id: "java-en-function-fielddelegate-formatted"
language: "java"
lang: "en"
category: "function"
name: "FieldDelegate.formatted"
signature: "public void formatted(Format.Field attr, Object value, int start, int end, StringBuf buffer)"
title: "FieldDelegate.formatted"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Format.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FieldDelegate.formatted

```java
public void formatted(Format.Field attr, Object value, int start, int end, StringBuf buffer)
```

Notified when a particular region of the String is formatted. This
 method will be invoked if there is no corresponding integer field id
 matching `attr`.

**参数**

- **attr** — Identifies the field matched
- **value** — Value associated with the field
- **start** — Beginning location of the field, will be >= 0
- **end** — End of the field, will be >= start and <= buffer.length()
- **buffer** — Contains current formatted value, receiver should NOT modify it.
