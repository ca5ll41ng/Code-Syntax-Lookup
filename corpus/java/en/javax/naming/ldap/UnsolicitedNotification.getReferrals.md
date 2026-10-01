---
id: "java-en-function-unsolicitednotification-getreferrals"
language: "java"
lang: "en"
category: "function"
name: "UnsolicitedNotification.getReferrals"
signature: "public String[] getReferrals()"
title: "UnsolicitedNotification.getReferrals"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/UnsolicitedNotification.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UnsolicitedNotification.getReferrals

```java
public String[] getReferrals()
```

Retrieves the referral(s) sent by the server.

**返回**

- A possibly null array of referrals, each of which is represented by a URL string. If null, no referral was sent by the server.
