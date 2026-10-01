---
id: "java-en-function-builder-setcalendartype"
language: "java"
lang: "en"
category: "function"
name: "Builder.setCalendarType"
signature: "public Builder setCalendarType(String type)"
title: "Builder.setCalendarType"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.setCalendarType

```java
public Builder setCalendarType(String type)
```

Sets the calendar type parameter to the given `type`. The
 calendar type given by this method has precedence over any explicit
 or implicit calendar type given by the
 `setLocale(Locale) locale`.

 

In addition to the available calendar types returned by the
 `getAvailableCalendarTypes() Calendar.getAvailableCalendarTypes`
 method, `"gregorian"` and `"iso8601"` as aliases of
 `"gregory"` can be used with this method.

**参数**

- **type** — the calendar type

**返回**

- this `Calendar.Builder`

**异常**

- **NullPointerException** — if `type` is `null`
- **IllegalArgumentException** — if `type` is unknown
- **IllegalStateException** — if another calendar type has already been set

**参见**

- Calendar#getCalendarType()
- Calendar#getAvailableCalendarTypes()
