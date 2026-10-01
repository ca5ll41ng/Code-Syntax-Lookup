---
id: "java-en-function-ldapreferralexception-getreferralcontext"
language: "java"
lang: "en"
category: "function"
name: "LdapReferralException.getReferralContext"
signature: "public abstract Context getReferralContext() throws NamingException"
title: "LdapReferralException.getReferralContext"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/LdapReferralException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LdapReferralException.getReferralContext

```java
public abstract Context getReferralContext() throws NamingException
```

Retrieves the context at which to continue the method using the
 context's environment and no controls.
 The referral context is created using the environment properties of
 the context that threw the `ReferralException` and no controls.

 This method is equivalent to

```

 getReferralContext(ctx.getEnvironment(), null);

```

 where `ctx` is the context that threw the `ReferralException.`

 It is overridden in this class for documentation purposes only.
 See `ReferralException` for how to use this method.

**返回**

- The non-null context at which to continue the method.

**异常**

- **NamingException** — If a naming exception was encountered. Call either `retryReferral()` or `skipReferral()` to continue processing referrals.
