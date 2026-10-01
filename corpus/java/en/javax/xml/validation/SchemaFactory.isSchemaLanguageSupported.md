---
id: "java-en-function-schemafactory-isschemalanguagesupported"
language: "java"
lang: "en"
category: "function"
name: "SchemaFactory.isSchemaLanguageSupported"
signature: "public abstract boolean isSchemaLanguageSupported(String schemaLanguage)"
title: "SchemaFactory.isSchemaLanguageSupported"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/SchemaFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SchemaFactory.isSchemaLanguageSupported

```java
public abstract boolean isSchemaLanguageSupported(String schemaLanguage)
```

Is specified schema supported by this `SchemaFactory`?

**参数**

- **schemaLanguage** — Specifies the schema language which the returned `SchemaFactory` will understand. `schemaLanguage` must specify a valid schema language.

**返回**

- `true` if `SchemaFactory` supports `schemaLanguage`, else `false`.

**异常**

- **NullPointerException** — If `schemaLanguage` is `null`.
- **IllegalArgumentException** — If `schemaLanguage.length() == 0` or `schemaLanguage` does not specify a valid schema language.
