---
id: "en-php-guide-book-dbase"
language: "php"
lang: "en"
category: "guide"
name: "book.dbase"
title: "dBase"
module: "dbase"
source_url: "https://www.php.net/manual/en/book.dbase.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# dBase

{{{ preface 

 Introduction 
> This extension has been moved to the  repository and is no longer bundled with PHP as of PHP 5.3.0.

  These functions allow you to access records stored in dBase-format (dbf) databases.   
> We recommend against using dBase files as your production database. Use [SQLite]() or choose any real SQL server instead; [MySQL]() or [Postgres]() are common choices with PHP. dBase support is here to allow you to import and export data to and from your web database, because the file format is commonly understood by Windows spreadsheets and organizers.

 
> As of dbase 7.0.0 the databases are automatically locked via `flock()`. There has been no support for locking earlier, so two concurrent web server processes modifying the same dBase file would have very likely ruined your database. This can happen even with dbase 7.0.0+ on systems which implement the locks at the process level with multithreaded SAPIs.

  dBase files are simple sequential files of fixed length records. Records are appended to the end of the file and deleted records are kept until you call `dbase_pack()`.    Only dbf file levels 3 (dBASE III+) - 5 (dBASE V) are supported. The types of dBase fields available are: 
| Field | dBase Type | Format | Additional information |
| --- | --- | --- | --- |
| `M` | Memo | n/a | This type is not supported by PHP, such field will be ignored |
| `D` | Date | `YYYYMMDD` | The field length is limited to 8 |
| `T` | DateTime | `YYYYMMDDhhmmss.uuu` | (FoxPro) No validity checks are done. Available as of dbase 7.0.0. |
| `N` | Number | A number | You must declare a length and a precision (the number of digits after the decimal point). |
| `F` | Float | A float number | Same as `N`. |
| `C` | String | A string | You must declare a length. When retrieving data, the string will be right-padded with spaces to fit the declared length. Overlong strings will be silently truncated when storing data. |
| `L` | Boolean | `T` or `Y` for `true`, `F` or `N` for `false`, `?` for uninitialized. | As of dbase 7.0.0, returned as a `bool` (`true` or `false`), or `null` for uninitialized fields. Formerly, returned as an `int` (`1` or `0`). |

   
> As of dbase 7.0.0 nullable fields are supported for `DBASE_TYPE_FOXPRO` databases. If a field is nullable, passing `null` will set the respective flag, and on later retrieval the field value will be `null`.

 
> There is no support for indexes or memo fields.

 

 }}}
