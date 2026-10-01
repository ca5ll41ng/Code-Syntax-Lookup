---
id: "java-en-function-gssmanager-addprovideratend"
language: "java"
lang: "en"
category: "function"
name: "GSSManager.addProviderAtEnd"
signature: "public abstract void addProviderAtEnd(Provider p, Oid mech) throws GSSException"
title: "GSSManager.addProviderAtEnd"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSManager.addProviderAtEnd

```java
public abstract void addProviderAtEnd(Provider p, Oid mech) throws GSSException
```

This method is used to indicate to the GSSManager that the
 application would like a particular provider to be used if no other
 provider can be found that supports the given mechanism. When a value
 of null is used instead of an Oid for the mechanism, the GSSManager
 must use the indicated provider for any mechanism.

 Calling this method repeatedly preserves the older settings but
 raises them above newer ones in preference thus forming an ordered
 list of providers and Oid pairs that grows at the bottom. Thus, the
 older provider settings will be utilized first before this one is.

 If there are any previously existing preferences that conflict with
 the preference being set here, then the GSSManager should ignore this
 request.

 If the GSSManager implementation does not support an SPI with a
 pluggable provider architecture it should throw a GSSException with
 the status code GSSException.UNAVAILABLE to indicate that the
 operation is unavailable.

 Suppose an application desired that when a mechanism of Oid m1 is
 needed the system default providers always be checked first, and only
 when they do not support m1 should a provider A be checked. It would
 then make the call:
 
```

         GSSManager mgr = GSSManager.getInstance();
         mgr.addProviderAtEnd(A, m1);
 
```

 Now, if it also desired that for all mechanisms the provider B be
 checked after all configured providers have been checked, it would
 then call:
 
```

         mgr.addProviderAtEnd(B, null);
 
```

 Effectively the list of preferences now becomes {..., (A, m1), (B,
 null)}.

 Suppose at a later time the following call is made to the same
 GSSManager instance:
 
```

         mgr.addProviderAtEnd(B, m2)
 
```

 then the previous setting with the pair (B, null) subsumes this and
 therefore this request should be ignored. The same would happen if a
 request is made for the already existing pairs of (A, m1) or (B,
 null).

 Please note, however, that the following call:
 
```

         mgr.addProviderAtEnd(A, null)
 
```

 is not subsumed by the previous setting of (A, m1) and the list will
 effectively become {..., (A, m1), (B, null), (A, null)}

**参数**

- **p** — the provider instance that should be used whenever support is needed for mech.
- **mech** — the mechanism for which the provider is being set

**异常**

- **GSSException** — containing the following major error codes: `UNAVAILABLE GSSException.UNAVAILABLE`, `FAILURE GSSException.FAILURE`
