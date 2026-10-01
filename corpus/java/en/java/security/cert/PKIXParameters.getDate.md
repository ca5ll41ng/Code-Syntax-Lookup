---
id: "java-en-function-pkixparameters-getdate"
language: "java"
lang: "en"
category: "function"
name: "PKIXParameters.getDate"
signature: "public Date getDate()"
title: "PKIXParameters.getDate"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXParameters.getDate

```java
public Date getDate()
```

Returns the time for which the validity of the certification path
 should be determined. If `null`, the current time is used.
 

 Note that the `Date` returned is copied to protect against
 subsequent modifications.

**返回**

- the `Date`, or `null` if not set

**参见**

- #setDate
