---
id: "java-en-function-era-getvalue"
language: "java"
lang: "en"
category: "function"
name: "Era.getValue"
signature: "int getValue()"
title: "Era.getValue"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/Era.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Era.getValue

```java
int getValue()
```

Gets the numeric value associated with the era as defined by the chronology.
 Each chronology defines the predefined Eras and methods to list the Eras
 of the chronology.
 

 All fields, including eras, have an associated numeric value.
 The meaning of the numeric value for era is determined by the chronology
 according to these principles:
 
 
- The era in use at the epoch 1970-01-01 (ISO) has the value 1.
 
- Later eras have sequentially higher values.
 
- Earlier eras have sequentially lower values, which may be negative.

**返回**

- the numeric era value
