---
id: "java-en-function-referralexception-getreferralcontext"
language: "java"
lang: "en"
category: "function"
name: "ReferralException.getReferralContext"
signature: "public abstract Context getReferralContext() throws NamingException"
title: "ReferralException.getReferralContext"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ReferralException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReferralException.getReferralContext

```java
public abstract Context getReferralContext() throws NamingException
```

Retrieves the context at which to continue the method.
 Regardless of whether a referral is encountered directly during a
 context operation, or indirectly, for example, during a search
 enumeration, the referral exception should provide a context
 at which to continue the operation. The referral context is
 created using the environment properties of the context
 that threw the ReferralException.

 To continue the operation, the client program should re-invoke
 the method using the same arguments as the original invocation.

**返回**

- The non-null context at which to continue the method.

**异常**

- **NamingException** — If a naming exception was encountered. Call either `retryReferral()` or `skipReferral()` to continue processing referrals.
