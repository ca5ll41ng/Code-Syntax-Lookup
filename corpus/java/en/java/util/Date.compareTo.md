---
id: "java-en-function-date-compareto"
language: "java"
lang: "en"
category: "function"
name: "Date.compareTo"
signature: "public int compareTo(Date anotherDate)"
title: "Date.compareTo"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Date.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Date.compareTo

```java
public int compareTo(Date anotherDate)
```

Compares two Dates for ordering.

**参数**

- **anotherDate** — the `Date` to be compared.

**返回**

- the value `0` if the argument Date is equal to this Date; a value less than `0` if this Date is before the Date argument; and a value greater than `0` if this Date is after the Date argument.

**异常**

- **NullPointerException** — if `anotherDate` is null.

> *Since 1.2*
