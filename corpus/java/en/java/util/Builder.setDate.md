---
id: "java-en-function-builder-setdate"
language: "java"
lang: "en"
category: "function"
name: "Builder.setDate"
signature: "public Builder setDate(int year, int month, int dayOfMonth)"
title: "Builder.setDate"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.setDate

```java
public Builder setDate(int year, int month, int dayOfMonth)
```

Sets the date field parameters to the values given by `year`,
 `month`, and `dayOfMonth`. This method is equivalent to
 a call to:
 
```

   setFields(Calendar.YEAR, year,
             Calendar.MONTH, month,
             Calendar.DAY_OF_MONTH, dayOfMonth);
```

**参数**

- **year** — the `YEAR YEAR` value
- **month** — the `MONTH MONTH` value (the month numbering is 0-based).
- **dayOfMonth** — the `DAY_OF_MONTH DAY_OF_MONTH` value

**返回**

- this `Calendar.Builder`
