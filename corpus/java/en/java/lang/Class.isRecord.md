---
id: "java-en-function-class-isrecord"
language: "java"
lang: "en"
category: "function"
name: "Class.isRecord"
signature: "public boolean isRecord()"
title: "Class.isRecord"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.isRecord

```java
public boolean isRecord()
```

Returns `true` if and only if this class is a record class.

 

 The `getSuperclass() direct superclass` of a record
 class is `java.lang.Record`. A record class is `FINAL final`. A record class has (possibly zero) record
 components; `getRecordComponents` returns a non-null but
 possibly empty value for a record.

 

 Note that class `Record` is not a record class and thus
 invoking this method on class `Record` returns `false`.

**返回**

- true if and only if this class is a record class, otherwise false

> *Since 16*
