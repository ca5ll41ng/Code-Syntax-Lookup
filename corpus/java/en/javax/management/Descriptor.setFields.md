---
id: "java-en-function-descriptor-setfields"
language: "java"
lang: "en"
category: "function"
name: "Descriptor.setFields"
signature: "public void setFields(String[] fieldNames, Object[] fieldValues) throws RuntimeOperationsException"
title: "Descriptor.setFields"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/Descriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Descriptor.setFields

```java
public void setFields(String[] fieldNames, Object[] fieldValues) throws RuntimeOperationsException
```

Sets all fields in the field names array to the new value with
 the same index in the field values array. Array sizes must match.

 

The field value will be validated before it is set.
 If it is not valid, then an exception will be thrown.
 If the arrays are empty, then no change will take effect.

**参数**

- **fieldNames** — String array of field names. The array and array elements cannot be null.
- **fieldValues** — Object array of the corresponding field values. The array cannot be null. Elements of the array can be null.

**异常**

- **RuntimeOperationsException** — if the change fails for any reason. Wrapped exception is `IllegalArgumentException` if `fieldNames` or `fieldValues` is null, or if the arrays are of different lengths, or if there is an illegal value in one of them. Wrapped exception is `UnsupportedOperationException` if the descriptor is immutable, and the call would change its contents.

**参见**

- #getFields
