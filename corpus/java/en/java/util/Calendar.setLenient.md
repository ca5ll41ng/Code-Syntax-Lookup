---
id: "java-en-function-calendar-setlenient"
language: "java"
lang: "en"
category: "function"
name: "Calendar.setLenient"
signature: "public void setLenient(boolean lenient)"
title: "Calendar.setLenient"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.setLenient

```java
public void setLenient(boolean lenient)
```

Specifies whether or not date/time interpretation is to be lenient.  With
 lenient interpretation, a date such as "February 942, 1996" will be
 treated as being equivalent to the 941st day after February 1, 1996.
 With strict (non-lenient) interpretation, such dates will cause an exception to be
 thrown. The default is lenient.

**参数**

- **lenient** — `true` if the lenient mode is to be turned on; `false` if it is to be turned off.

**参见**

- #isLenient()
- java.text.DateFormat#setLenient
