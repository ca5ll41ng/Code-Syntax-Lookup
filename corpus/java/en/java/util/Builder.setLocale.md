---
id: "java-en-function-builder-setlocale"
language: "java"
lang: "en"
category: "function"
name: "Builder.setLocale"
signature: "public Builder setLocale(Locale locale)"
title: "Builder.setLocale"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.setLocale

```java
public Builder setLocale(Locale locale)
```

Sets the locale parameter to the given `locale`. If no locale
 is given to this `Calendar.Builder`, the `getDefault(Locale.Category) default `Locale``
 for `FORMAT` will be used.

 

If no calendar type is explicitly given by a call to the
 `setCalendarType(String) setCalendarType` method,
 the `Locale` value is used to determine what type of
 `Calendar` to be built.

 

If no week definition parameters are explicitly given by a call to
 the `setWeekDefinition(int,int) setWeekDefinition` method, the
 `Locale`'s default values are used.

**参数**

- **locale** — the `Locale`

**返回**

- this `Calendar.Builder`

**异常**

- **NullPointerException** — if `locale` is `null`

**参见**

- Calendar#getInstance(Locale)
