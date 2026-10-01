---
id: "java-en-function-descriptor-setfield"
language: "java"
lang: "en"
category: "function"
name: "Descriptor.setField"
signature: "public void setField(String fieldName, Object fieldValue) throws RuntimeOperationsException"
title: "Descriptor.setField"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/Descriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Descriptor.setField

```java
public void setField(String fieldName, Object fieldValue) throws RuntimeOperationsException
```

Sets the value for a specific field name. This will
 modify an existing field or add a new field.

 

The field value will be validated before it is set.
 If it is not valid, then an exception will be thrown.
 The meaning of validity is dependent on the descriptor
 implementation.

**参数**

- **fieldName** — The field name to be set. Cannot be null or empty.
- **fieldValue** — The field value to be set for the field name. Can be null if that is a valid value for the field.

**异常**

- **RuntimeOperationsException** — if the field name or field value is illegal (wrapped exception is `IllegalArgumentException`); or if the descriptor is immutable (wrapped exception is `UnsupportedOperationException`).
