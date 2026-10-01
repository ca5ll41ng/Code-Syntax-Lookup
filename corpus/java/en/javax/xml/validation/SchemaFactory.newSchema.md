---
id: "java-en-function-schemafactory-newschema"
language: "java"
lang: "en"
category: "function"
name: "SchemaFactory.newSchema"
signature: "public Schema newSchema(Source schema) throws SAXException"
title: "SchemaFactory.newSchema"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/SchemaFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SchemaFactory.newSchema

```java
public Schema newSchema(Source schema) throws SAXException
```

Parses the specified source as a schema and returns it as a schema.

 

This is a convenience method for `newSchema`.

**参数**

- **schema** — Source that represents a schema.

**返回**

- New `Schema` from parsing `schema`.

**异常**

- **SAXException** — If a SAX error occurs during parsing.
- **NullPointerException** — if `schema` is null.
