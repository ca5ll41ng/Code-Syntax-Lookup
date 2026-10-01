---
id: "java-en-function-descriptor-getfieldvalues"
language: "java"
lang: "en"
category: "function"
name: "Descriptor.getFieldValues"
signature: "public Object[] getFieldValues(String... fieldNames)"
title: "Descriptor.getFieldValues"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/Descriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Descriptor.getFieldValues

```java
public Object[] getFieldValues(String... fieldNames)
```

Returns all the field values in the descriptor as an array of Objects. The
 returned values are in the same order as the `fieldNames` String array parameter.

**参数**

- **fieldNames** — String array of the names of the fields that the values should be returned for.  If the array is empty then an empty array will be returned.  If the array is null then all values will be returned, as if the parameter were the array returned by `getFieldNames`.  If a field name in the array does not exist, including the case where it is null or the empty string, then null is returned for the matching array element being returned.

**返回**

- Object array of field values. If the list of `fieldNames` is empty, you will get an empty array.
