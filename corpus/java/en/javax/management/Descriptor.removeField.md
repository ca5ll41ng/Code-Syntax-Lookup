---
id: "java-en-function-descriptor-removefield"
language: "java"
lang: "en"
category: "function"
name: "Descriptor.removeField"
signature: "public void removeField(String fieldName)"
title: "Descriptor.removeField"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/Descriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Descriptor.removeField

```java
public void removeField(String fieldName)
```

Removes a field from the descriptor.

**参数**

- **fieldName** — String name of the field to be removed. If the field name is illegal or the field is not found, no exception is thrown.

**异常**

- **RuntimeOperationsException** — if a field of the given name exists and the descriptor is immutable.  The wrapped exception will be an `UnsupportedOperationException`.
