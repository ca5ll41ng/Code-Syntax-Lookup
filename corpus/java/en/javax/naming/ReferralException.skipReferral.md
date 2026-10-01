---
id: "java-en-function-referralexception-skipreferral"
language: "java"
lang: "en"
category: "function"
name: "ReferralException.skipReferral"
signature: "public abstract boolean skipReferral()"
title: "ReferralException.skipReferral"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ReferralException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReferralException.skipReferral

```java
public abstract boolean skipReferral()
```

Discards the referral about to be processed.
 A call to this method should be followed by a call to
 `getReferralContext` to allow the processing of
 other referrals to continue.
 The following code fragment shows a typical usage pattern.
 
```

  } catch (ReferralException e) {
      if (!shallIFollow(e.getReferralInfo())) {
          if (!e.skipReferral()) {
              return;
          }
      }
      ctx = e.getReferralContext();
  }
 
```

**返回**

- true If more referral processing is pending; false otherwise.
