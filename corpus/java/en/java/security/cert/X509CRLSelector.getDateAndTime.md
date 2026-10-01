---
id: "java-en-function-x509crlselector-getdateandtime"
language: "java"
lang: "en"
category: "function"
name: "X509CRLSelector.getDateAndTime"
signature: "public Date getDateAndTime()"
title: "X509CRLSelector.getDateAndTime"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CRLSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CRLSelector.getDateAndTime

```java
public Date getDateAndTime()
```

Returns the dateAndTime criterion. The specified date must be
 equal to or later than the value of the thisUpdate component
 of the `X509CRL` and earlier than the value of the
 nextUpdate component. There is no match if the
 `X509CRL` does not contain a nextUpdate component.
 If `null`, no dateAndTime check will be done.
 

 Note that the `Date` returned is cloned to protect against
 subsequent modifications.

**返回**

- the `Date` to match against (or `null`)

**参见**

- #setDateAndTime
