---
id: "java-en-function-duration-getyears"
language: "java"
lang: "en"
category: "function"
name: "Duration.getYears"
signature: "public int getYears()"
title: "Duration.getYears"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/Duration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Duration.getYears

```java
public int getYears()
```

Get the years value of this `Duration` as an `int` or `0` if not present.

 

`getYears()` is a convenience method for
 `getField`.

 

As the return value is an `int`, an incorrect value will be returned for `Duration`s
 with years that go beyond the range of an `int`.
 Use `getField` to avoid possible loss of precision.

**返回**

- If the years field is present, return its value as an `int`, else return `0`.
