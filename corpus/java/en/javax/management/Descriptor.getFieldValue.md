---
id: "java-en-function-descriptor-getfieldvalue"
language: "java"
lang: "en"
category: "function"
name: "Descriptor.getFieldValue"
signature: "public Object getFieldValue(String fieldName) throws RuntimeOperationsException"
title: "Descriptor.getFieldValue"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/Descriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Descriptor.getFieldValue

```java
public Object getFieldValue(String fieldName) throws RuntimeOperationsException
```

Returns the value for a specific field name, or null if no value
 is present for that name.

**参数**

- **fieldName** — the field name.

**返回**

- the corresponding value, or null if the field is not present.

**异常**

- **RuntimeOperationsException** — if the field name is illegal.
