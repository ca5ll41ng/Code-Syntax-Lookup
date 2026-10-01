---
id: "java-en-function-builder-settimeofday"
language: "java"
lang: "en"
category: "function"
name: "Builder.setTimeOfDay"
signature: "public Builder setTimeOfDay(int hourOfDay, int minute, int second)"
title: "Builder.setTimeOfDay"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.setTimeOfDay

```java
public Builder setTimeOfDay(int hourOfDay, int minute, int second)
```

Sets the time of day field parameters to the values given by
 `hourOfDay`, `minute`, and `second`. This method is
 equivalent to a call to:
 
```

   setTimeOfDay(hourOfDay, minute, second, 0);
```

**参数**

- **hourOfDay** — the `HOUR_OF_DAY HOUR_OF_DAY` value (24-hour clock)
- **minute** — the `MINUTE MINUTE` value
- **second** — the `SECOND SECOND` value

**返回**

- this `Calendar.Builder`
