---
id: "java-en-function-builder-setfields"
language: "java"
lang: "en"
category: "function"
name: "Builder.setFields"
signature: "public Builder setFields(int... fieldValuePairs)"
title: "Builder.setFields"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.setFields

```java
public Builder setFields(int... fieldValuePairs)
```

Sets field parameters to their values given by
 `fieldValuePairs` that are pairs of a field and its value.
 For example,
 
```

   setFields(Calendar.YEAR, 2013,
             Calendar.MONTH, Calendar.DECEMBER,
             Calendar.DAY_OF_MONTH, 23);
```

 is equivalent to the sequence of the following
 `set(int, int) set` calls:
 
```

   set(Calendar.YEAR, 2013)
   .set(Calendar.MONTH, Calendar.DECEMBER)
   .set(Calendar.DAY_OF_MONTH, 23);
```

**参数**

- **fieldValuePairs** — field-value pairs

**返回**

- this `Calendar.Builder`

**异常**

- **NullPointerException** — if `fieldValuePairs` is `null`
- **IllegalArgumentException** — if any of fields are invalid, or if `fieldValuePairs.length` is an odd number.
- **IllegalStateException** — if the instant value has been set, or if fields have been set too many (approximately `MAX_VALUE`) times.
