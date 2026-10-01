---
id: "python-zh-function-zipfile-zipinfo-date_time"
language: "python"
lang: "zh"
category: "function"
name: "ZipInfo.date_time"
directive: "attribute"
module: "zipfile"
source_url: "https://docs.python.org/zh-cn/3/library/zipfile.html#zipfile.ZipInfo.date_time"
license: "PSF"
updated: "2026-10-01"
---

# ZipInfo.date_time

The time and date of the last modification to the archive member.  This is a
tuple of six values representing the "last [modified] file time" and "last [modified] file date"
fields from the ZIP file's central directory.

该元组包含：

+-------+--------------------------+
 Index  Value                    
+=======+==========================+
 `0`  Year (>= 1980)           
+-------+--------------------------+
 `1`  Month (one-based)        
+-------+--------------------------+
 `2`  Day of month (one-based) 
+-------+--------------------------+
 `3`  Hours (zero-based)       
+-------+--------------------------+
 `4`  Minutes (zero-based)     
+-------+--------------------------+
 `5`  Seconds (zero-based)     |
+-------+--------------------------+

> **Note**
>
> The ZIP format supports multiple timestamp fields in different locations
> (central directory, extra fields for NTFS/UNIX systems, etc.). This attribute
> specifically returns the timestamp from the central directory. The central
> directory timestamp format in ZIP files does not support timestamps before
> 1980. While some extra field formats (such as UNIX timestamps) can represent
> earlier dates, this attribute only returns the central directory timestamp.
>
> The central directory timestamp is interpreted as representing local
> time, rather than UTC time, to match the behavior of other zip tools.
>
