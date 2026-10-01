---
id: "java-en-function-duration-getseconds"
language: "java"
lang: "en"
category: "function"
name: "Duration.getSeconds"
signature: "public int getSeconds()"
title: "Duration.getSeconds"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/Duration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Duration.getSeconds

```java
public int getSeconds()
```

Obtains the value of the SECONDS field as an integer value,
 or 0 if not present.

 This method works just like `getYears` except
 that this method works on the SECONDS field.

**返回**

- seconds in the integer value. The fraction of seconds will be discarded (for example, if the actual value is 2.5, this method returns 2)
