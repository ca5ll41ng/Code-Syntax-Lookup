---
id: "java-en-function-immutabledescriptor-removefield"
language: "java"
lang: "en"
category: "function"
name: "ImmutableDescriptor.removeField"
signature: "public final void removeField(String fieldName)"
title: "ImmutableDescriptor.removeField"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/ImmutableDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ImmutableDescriptor.removeField

```java
public final void removeField(String fieldName)
```

Removes a field from the descriptor.

**参数**

- **fieldName** — String name of the field to be removed. If the field name is illegal or the field is not found, no exception is thrown.

**异常**

- **RuntimeOperationsException** — if a field of the given name exists and the descriptor is immutable.  The wrapped exception will be an `UnsupportedOperationException`.
