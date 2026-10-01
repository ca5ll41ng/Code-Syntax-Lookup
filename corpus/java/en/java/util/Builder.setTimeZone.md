---
id: "java-en-function-builder-settimezone"
language: "java"
lang: "en"
category: "function"
name: "Builder.setTimeZone"
signature: "public Builder setTimeZone(TimeZone zone)"
title: "Builder.setTimeZone"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.setTimeZone

```java
public Builder setTimeZone(TimeZone zone)
```

Sets the time zone parameter to the given `zone`. If no time
 zone parameter is given to this `Calendar.Builder`, the
 `getDefault() default
 `TimeZone`` will be used in the `build() build`
 method.

**参数**

- **zone** — the `TimeZone`

**返回**

- this `Calendar.Builder`

**异常**

- **NullPointerException** — if `zone` is `null`

**参见**

- Calendar#setTimeZone(TimeZone)
