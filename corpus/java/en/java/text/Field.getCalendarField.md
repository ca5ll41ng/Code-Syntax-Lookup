---
id: "java-en-function-field-getcalendarfield"
language: "java"
lang: "en"
category: "function"
name: "Field.getCalendarField"
signature: "public int getCalendarField()"
title: "Field.getCalendarField"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DateFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Field.getCalendarField

```java
public int getCalendarField()
```

Returns the `Calendar` field associated with this
 attribute. For example, if this represents the hours field of
 a `Calendar`, this method would return `Calendar.HOUR`.
 The return value of `-1` guarantees that this field does not
 represent any corresponding constant in `Calendar`.

 not represent any corresponding constant in `Calendar`.

**返回**

- Calendar constant for this field

**参见**

- java.util.Calendar
