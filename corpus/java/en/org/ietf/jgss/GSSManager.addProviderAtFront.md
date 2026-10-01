---
id: "java-en-function-gssmanager-addprovideratfront"
language: "java"
lang: "en"
category: "function"
name: "GSSManager.addProviderAtFront"
signature: "public abstract void addProviderAtFront(Provider p, Oid mech) throws GSSException"
title: "GSSManager.addProviderAtFront"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSManager.addProviderAtFront

```java
public abstract void addProviderAtFront(Provider p, Oid mech) throws GSSException
```

This method is used to indicate to the GSSManager that the
 application would like a particular provider to be used ahead of all
 others when support is desired for the given mechanism. When a value
 of null is used instead of an Oid for the mechanism,
 the GSSManager must use the indicated provider ahead of all others
 no matter what the mechanism is. Only when the indicated provider
 does not support the needed mechanism should the GSSManager move on
 to a different provider.

 Calling this method repeatedly preserves the older settings but
 lowers them in preference thus forming an ordered list of provider
 and Oid pairs that grows at the top.

 Calling addProviderAtFront with a null Oid will remove
 all previous preferences that were set for this provider in the
 GSSManager instance. Calling addProviderAtFront with a non-null
 Oid will remove any previous preference that was set
 using this mechanism and this provider together.

 If the GSSManager implementation does not support an SPI with a
 pluggable provider architecture it should throw a GSSException with
 the status code GSSException.UNAVAILABLE to indicate that the
 operation is unavailable.

 Suppose an application desired that the provider A always be checked
 first when any mechanism is needed, it would call:
 
```

         GSSManager mgr = GSSManager.getInstance();
         // mgr may at this point have its own pre-configured list
         // of provider preferences. The following will prepend to
         // any such list:

         mgr.addProviderAtFront(A, null);
 
```

 Now if it also desired that the mechanism of Oid m1 always be
 obtained from the provider B before the previously set A was checked,
 it would call:
 
```

         mgr.addProviderAtFront(B, m1);
 
```

 The GSSManager would then first check with B if m1 was needed. In
 case B did not provide support for m1, the GSSManager would continue
 on to check with A.  If any mechanism m2 is needed where m2 is
 different from m1 then the GSSManager would skip B and check with A
 directly.

 Suppose at a later time the following call is made to the same
 GSSManager instance:
 
```

         mgr.addProviderAtFront(B, null)
 
```

 then the previous setting with the pair (B, m1) is subsumed by this
 and should be removed. Effectively the list of preferences now
 becomes {(B, null), (A, null),
         ... //followed by the pre-configured list.

 Please note, however, that the following call:
 
```

         mgr.addProviderAtFront(A, m3)
 
```

 does not subsume the previous setting of (A, null) and the list will
 effectively become {(A, m3), (B, null), (A, null), ...}

**参数**

- **p** — the provider instance that should be used whenever support is needed for mech.
- **mech** — the mechanism for which the provider is being set

**异常**

- **GSSException** — containing the following major error codes: `UNAVAILABLE GSSException.UNAVAILABLE`, `FAILURE GSSException.FAILURE`
