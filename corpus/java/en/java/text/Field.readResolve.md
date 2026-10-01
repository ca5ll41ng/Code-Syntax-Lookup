---
id: "java-en-function-field-readresolve"
language: "java"
lang: "en"
category: "function"
name: "Field.readResolve"
signature: "protected Object readResolve() throws InvalidObjectException"
title: "Field.readResolve"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DateFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Field.readResolve

```java
protected Object readResolve() throws InvalidObjectException
```

Resolves instances being deserialized to the predefined constants.

**返回**

- resolved DateFormat.Field constant

**异常**

- **InvalidObjectException** — if the constant could not be resolved.
