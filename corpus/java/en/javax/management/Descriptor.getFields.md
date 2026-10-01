---
id: "java-en-function-descriptor-getfields"
language: "java"
lang: "en"
category: "function"
name: "Descriptor.getFields"
signature: "public String[] getFields()"
title: "Descriptor.getFields"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/Descriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Descriptor.getFields

```java
public String[] getFields()
```

Returns all of the fields contained in this descriptor as a string array.

**返回**

- String array of fields in the format fieldName=fieldValue  If the value of a field is not a String, then the toString() method will be called on it and the returned value, enclosed in parentheses, used as the value for the field in the returned array. If the value of a field is null, then the value of the field in the returned array will be empty.  If the descriptor is empty, you will get an empty array.

**参见**

- #setFields
