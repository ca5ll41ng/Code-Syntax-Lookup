---
id: "java-en-function-pkixparameters-setdate"
language: "java"
lang: "en"
category: "function"
name: "PKIXParameters.setDate"
signature: "public void setDate(Date date)"
title: "PKIXParameters.setDate"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXParameters.setDate

```java
public void setDate(Date date)
```

Sets the time for which the validity of the certification path
 should be determined. If `null`, the current time is used.
 

 Note that the `Date` supplied here is copied to protect
 against subsequent modifications.

**参数**

- **date** — the `Date`, or `null` for the current time

**参见**

- #getDate
