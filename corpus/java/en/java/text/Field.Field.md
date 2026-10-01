---
id: "java-en-function-field-field"
language: "java"
lang: "en"
category: "function"
name: "Field.Field"
signature: "protected Field(String name, int calendarField)"
title: "Field.Field"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DateFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Field.Field

```java
protected Field(String name, int calendarField)
```

Creates a `Field`.

**参数**

- **name** — the name of the `Field`
- **calendarField** — the `Calendar` constant this `Field` corresponds to; any value, even one outside the range of legal `Calendar` values may be used, but `-1` should be used for values that don't correspond to legal `Calendar` values
