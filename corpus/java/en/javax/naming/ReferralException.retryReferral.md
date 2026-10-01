---
id: "java-en-function-referralexception-retryreferral"
language: "java"
lang: "en"
category: "function"
name: "ReferralException.retryReferral"
signature: "public abstract void retryReferral()"
title: "ReferralException.retryReferral"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ReferralException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReferralException.retryReferral

```java
public abstract void retryReferral()
```

Retries the referral currently being processed.
 A call to this method should be followed by a call to
 `getReferralContext` to allow the current
 referral to be retried.
 The following code fragment shows a typical usage pattern.
 
```

  } catch (ReferralException e) {
      while (true) {
          try {
              ctx = e.getReferralContext(env);
              break;
          } catch (NamingException ne) {
              if (! shallIRetry()) {
                  return;
              }
              // modify environment properties (env), if necessary
              e.retryReferral();
          }
      }
  }
 
```
