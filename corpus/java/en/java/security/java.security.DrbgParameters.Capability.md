---
id: "java-en-function-java-security-drbgparameters-capability"
language: "java"
lang: "en"
category: "function"
name: "java.security.DrbgParameters.Capability"
title: "Capability"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/DrbgParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Capability

The reseedable and prediction resistance capabilities of a DRBG.
 

 When this object is passed to a `SecureRandom.getInstance()` call,
 it is the requested minimum capability. When it's returned from
 `SecureRandom.getParameters()`, it is the effective capability.
 

 Please note that while the `Instantiate_function` defined in
 NIST SP 800-90Ar1 only includes a `prediction_resistance_flag`
 parameter, the `Capability` type includes an extra value
 `RESEED_ONLY` because reseeding is an optional function.
 If `NONE` is used in an `Instantiation` object in calling the
 `SecureRandom.getInstance` method, the returned DRBG instance
 is not guaranteed to support reseeding. If `RESEED_ONLY` or
 `PR_AND_RESEED` is used, the instance must support reseeding.
 

 The table below lists possible effective values if a certain
 capability is requested, i.e.
 
```

 Capability requested = ...;
 SecureRandom s = SecureRandom.getInstance("DRBG",
         DrbgParameters.instantiation(-1, requested, null));
 Capability effective = ((DrbgParameters.Instantiation) s.getParameters())
         .getCapability();
```

 
 
 requested and effective capabilities
 
 
 Requested Value
 Possible Effective Values
 
 
 
 NONENONE, RESEED_ONLY, PR_AND_RESEED
 RESEED_ONLYRESEED_ONLY, PR_AND_RESEED
 PR_AND_RESEEDPR_AND_RESEED
 
 
 

 A DRBG implementation supporting prediction resistance must also
 support reseeding.

> *Since 9*
