---
id: "java-en-function-java-util-uuid"
language: "java"
lang: "en"
category: "function"
name: "java.util.UUID"
title: "UUID"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/UUID.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UUID

A class that represents an immutable Universally Unique IDentifier (UUID).
 A UUID represents a 128-bit value.

 

 This class is primarily designed for manipulating Leach-Salz variant UUIDs,
 but it also supports the creation of UUIDs of other variants.

 

 The layout of a variant 2 (Leach-Salz) UUID is as follows:

 The most significant long consists of the following unsigned fields:
 
```

 0xFFFFFFFF00000000 time_low
 0x00000000FFFF0000 time_mid
 0x000000000000F000 version
 0x0000000000000FFF time_hi
 
```

 The least significant long consists of the following unsigned fields:
 
```

 0xC000000000000000 variant
 0x3FFF000000000000 clock_seq
 0x0000FFFFFFFFFFFF node
 
```

 

 The variant field contains a value which identifies the layout of the
 `UUID`.  The bit layout described above is valid only for a `UUID` with a variant value of 2, which indicates the Leach-Salz variant.

 

 See 
 RFC 9562: Universally Unique Identifiers (UUIDs) for the complete specification,
 including the UUID format, layouts, and algorithms for creating `UUID`s.

 

 There are eight defined types of UUIDs, each identified by a version number:
 time-based (version 1), DCE security (version 2), name-based with MD5 (version 3),
 randomly generated (version 4), name-based with SHA-1 (version 5), reordered time-based (version 6),
 Unix epoch time-based (version 7), and custom-defined layout (version 8).

      RFC 9562 Universally Unique IDentifiers (UUIDs)

> *Since 1.5*
