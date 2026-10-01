---
id: "java-en-function-attribute-readresolve"
language: "java"
lang: "en"
category: "function"
name: "Attribute.readResolve"
signature: "protected Object readResolve() throws InvalidObjectException"
title: "Attribute.readResolve"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/AttributedCharacterIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attribute.readResolve

```java
protected Object readResolve() throws InvalidObjectException
```

Resolves instances being deserialized to the predefined constants.

**返回**

- the resolved `Attribute` object

**异常**

- **InvalidObjectException** — if the object to resolve is not an instance of `Attribute`
