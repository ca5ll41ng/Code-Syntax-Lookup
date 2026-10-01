---
id: "java-en-function-context-referral"
language: "java"
lang: "en"
category: "function"
name: "Context.REFERRAL"
signature: "String REFERRAL = \"java.naming.referral\""
title: "Context.REFERRAL"
directive: "field"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Context.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Context.REFERRAL

```java
String REFERRAL = "java.naming.referral"
```

Constant that holds the name of the environment property for
 specifying how referrals encountered by the service provider
 are to be processed. The value of the property is one of the
 following strings:
 
 "follow"
 follow referrals automatically
 "ignore"
 ignore referrals
 "throw"
 throw `ReferralException` when a referral is encountered.
 
 If this property is not specified, the default is
 determined by the provider.

 

 The value of this constant is "java.naming.referral".

**参见**

- #addToEnvironment(String, Object)
- #removeFromEnvironment(String)
