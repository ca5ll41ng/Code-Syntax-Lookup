---
id: "java-en-function-referralexception-getreferralinfo"
language: "java"
lang: "en"
category: "function"
name: "ReferralException.getReferralInfo"
signature: "public abstract Object getReferralInfo()"
title: "ReferralException.getReferralInfo"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ReferralException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReferralException.getReferralInfo

```java
public abstract Object getReferralInfo()
```

Retrieves information (such as URLs) related to this referral.
 The program may examine or display this information
 to the user to determine whether to continue with the referral,
 or to determine additional information needs to be supplied in order
 to continue with the referral.

**返回**

- Non-null referral information related to this referral.
