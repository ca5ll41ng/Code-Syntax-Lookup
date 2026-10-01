---
id: "java-en-function-field-ofcalendarfield"
language: "java"
lang: "en"
category: "function"
name: "Field.ofCalendarField"
signature: "public static Field ofCalendarField(int calendarField)"
title: "Field.ofCalendarField"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DateFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Field.ofCalendarField

```java
public static Field ofCalendarField(int calendarField)
```

Returns the `Field` constant that corresponds to
 the `Calendar` constant `calendarField`.
 If there is no direct mapping between the `Calendar`
 constant and a `Field`, null is returned.

**参数**

- **calendarField** — Calendar field constant

**返回**

- Field instance representing calendarField.

**异常**

- **IllegalArgumentException** — if `calendarField` is not the value of a `Calendar` field constant.

**参见**

- java.util.Calendar
