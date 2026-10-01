---
id: "java-en-function-java-lang-runtime-version"
language: "java"
lang: "en"
category: "function"
name: "java.lang.Runtime.Version"
title: "Version"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Runtime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Version

A representation of a version string for an implementation of the
 Java&nbsp;SE Platform.  A version string consists of a version number
 optionally followed by pre-release and build information.

 Version numbers

 

 A version number, `$VNUM`, is a non-empty sequence of
 elements separated by period characters (U+002E).  An element is either
 zero, or an unsigned integer numeral without leading zeros.  The final
 element in a version number must not be zero.  When an element is
 incremented, all subsequent elements are removed.  The format is: 

 
```

 [1-9][0-9]*((\.0)*\.[1-9][0-9]*)*
 
```

 

 The sequence may be of arbitrary length but the first four elements
 are assigned specific meanings, as follows:

 
```

 $FEATURE.$INTERIM.$UPDATE.$PATCH
 
```

 

 
- 

 `$FEATURE` &#x2014; The
 feature-release counter, incremented for every feature release
 regardless of release content.  Features may be added in a feature
 release; they may also be removed, if advance notice was given at least
 one feature release ahead of time.  Incompatible changes may be made
 when justified. 

 
- 

 `$INTERIM` &#x2014; The
 interim-release counter, incremented for non-feature releases that
 contain compatible bug fixes and enhancements but no incompatible
 changes, no feature removals, and no changes to standard APIs.
 

 
- 

 `$UPDATE` &#x2014; The update-release
 counter, incremented for compatible update releases that fix security
 issues, regressions, and bugs in newer features. 

 
- 

 `$PATCH` &#x2014; The emergency
 patch-release counter, incremented only when it's necessary to produce
 an emergency release to fix a critical issue. 

 

 

 The fifth and later elements of a version number are free for use by
 platform implementors, to identify implementor-specific patch
 releases. 

 

 A version number never has trailing zero elements.  If an element
 and all those that follow it logically have the value zero then all of
 them are omitted. 

 

 The sequence of numerals in a version number is compared to another
 such sequence in numerical, pointwise fashion; e.g., `10.0.4` is less than `10.1.2`.  If one sequence is shorter than
 another then the missing elements of the shorter sequence are considered
 to be less than the corresponding elements of the longer sequence;
 e.g., `10.0.2` is less than `10.0.2.1`. 

 Version strings

 

 A version string, `$VSTR`, is a version number `$VNUM`, as described above, optionally followed by pre-release and build
 information, in one of the following formats: 

 
```

     $VNUM(-$PRE)?\+$BUILD(-$OPT)?
     $VNUM-$PRE(-$OPT)?
     $VNUM(\+-$OPT)?
 
```

 

 where: 

 

 
- 

 `$PRE`, matching `([a-zA-Z0-9]+)`
 &#x2014; A pre-release identifier.  Typically `ea`, for a
 potentially unstable early-access release under active development, or
 `internal`, for an internal developer build. 

 
- 

 `$BUILD`, matching `(0|[1-9][0-9]*)` &#x2014; The build number, incremented for each promoted
 build.  `$BUILD` is reset to `1` when any portion of `$VNUM` is incremented. 

 
- 

 `$OPT`, matching `([-a-zA-Z0-9.]+)`
 &#x2014; Additional build information, if desired.  In the case of an
 `internal` build this will often contain the date and time of the
 build. 

 

 

 A version string `10-ea` matches `$VNUM = "10"` and
 `$PRE = "ea"`.  The version string `10+-ea` matches
 `$VNUM = "10"` and `$OPT = "ea"`. 

 

 When comparing two version strings, the value of `$OPT`, if
 present, may or may not be significant depending on the chosen
 comparison method.  The comparison methods `compareTo(Version)
 compareTo` and `compareToIgnoreOptional(Version)
 compareToIgnoreOptional` should be used consistently with the
 corresponding methods `equals` and `equalsIgnoreOptional`.  

 

 A short version string, `$SVSTR`, often useful in
 less formal contexts, is a version number optionally followed by a
 pre-release identifier:

 
```

     $VNUM(-$PRE)?
 
```

 

This is a value-based
 class; programmers should treat instances that are
 `equals(Object) equal` as interchangeable and should not
 use instances for synchronization, or unpredictable behavior may
 occur. For example, in a future release, synchronization may fail.

> *Since 9*
