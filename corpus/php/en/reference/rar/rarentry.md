---
id: "en-php-guide-class-rarentry"
language: "php"
lang: "en"
category: "guide"
name: "class.rarentry"
title: "The `RarEntry` class"
module: "rar"
source_url: "https://www.php.net/manual/en/class.rarentry.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The `RarEntry` class

RarEntry

   Introduction  A RAR entry, representing a directory or a compressed file inside a RAR archive.      Class Synopsis   `RarEntry`    `final` `RarEntry`      `const` `int` `RarEntry::HOST_MSDOS` 0   `const` `int` `RarEntry::HOST_OS2` 1   `const` `int` `RarEntry::HOST_WIN32` 2   `const` `int` `RarEntry::HOST_UNIX` 3   `const` `int` `RarEntry::HOST_MACOS` 4   `const` `int` `RarEntry::HOST_BEOS` 5   `const` `int` `RarEntry::ATTRIBUTE_WIN_READONLY` 1   `const` `int` `RarEntry::ATTRIBUTE_WIN_HIDDEN` 2   `const` `int` `RarEntry::ATTRIBUTE_WIN_SYSTEM` 4   `const` `int` `RarEntry::ATTRIBUTE_WIN_DIRECTORY` 16   `const` `int` `RarEntry::ATTRIBUTE_WIN_ARCHIVE` 32   `const` `int` `RarEntry::ATTRIBUTE_WIN_DEVICE` 64   `const` `int` `RarEntry::ATTRIBUTE_WIN_NORMAL` 128   `const` `int` `RarEntry::ATTRIBUTE_WIN_TEMPORARY` 256   `const` `int` `RarEntry::ATTRIBUTE_WIN_SPARSE_FILE` 512   `const` `int` `RarEntry::ATTRIBUTE_WIN_REPARSE_POINT` 1024   `const` `int` `RarEntry::ATTRIBUTE_WIN_COMPRESSED` 2048   `const` `int` `RarEntry::ATTRIBUTE_WIN_OFFLINE` 4096   `const` `int` `RarEntry::ATTRIBUTE_WIN_NOT_CONTENT_INDEXED` 8192   `const` `int` `RarEntry::ATTRIBUTE_WIN_ENCRYPTED` 16384   `const` `int` `RarEntry::ATTRIBUTE_WIN_VIRTUAL` 65536   `const` `int` `RarEntry::ATTRIBUTE_UNIX_WORLD_EXECUTE` 1   `const` `int` `RarEntry::ATTRIBUTE_UNIX_WORLD_WRITE` 2   `const` `int` `RarEntry::ATTRIBUTE_UNIX_WORLD_READ` 4   `const` `int` `RarEntry::ATTRIBUTE_UNIX_GROUP_EXECUTE` 8   `const` `int` `RarEntry::ATTRIBUTE_UNIX_GROUP_WRITE` 16   `const` `int` `RarEntry::ATTRIBUTE_UNIX_GROUP_READ` 32   `const` `int` `RarEntry::ATTRIBUTE_UNIX_OWNER_EXECUTE` 64   `const` `int` `RarEntry::ATTRIBUTE_UNIX_OWNER_WRITE` 128   `const` `int` `RarEntry::ATTRIBUTE_UNIX_OWNER_READ` 256   `const` `int` `RarEntry::ATTRIBUTE_UNIX_STICKY` 512   `const` `int` `RarEntry::ATTRIBUTE_UNIX_SETGID` 1024   `const` `int` `RarEntry::ATTRIBUTE_UNIX_SETUID` 2048   `const` `int` `RarEntry::ATTRIBUTE_UNIX_FINAL_QUARTET` 61440   `const` `int` `RarEntry::ATTRIBUTE_UNIX_FIFO` 4096   `const` `int` `RarEntry::ATTRIBUTE_UNIX_CHAR_DEV` 8192   `const` `int` `RarEntry::ATTRIBUTE_UNIX_DIRECTORY` 16384   `const` `int` `RarEntry::ATTRIBUTE_UNIX_BLOCK_DEV` 24576   `const` `int` `RarEntry::ATTRIBUTE_UNIX_REGULAR_FILE` 32768   `const` `int` `RarEntry::ATTRIBUTE_UNIX_SYM_LINK` 40960   `const` `int` `RarEntry::ATTRIBUTE_UNIX_SOCKET` 49152         Predefined Constants 
- **`RarEntry::HOST_MSDOS`** — If the return value of `RarEntry::getHostOs()` equals this constant, MS-DOS was used to add this entry. Use instead of `RAR_HOST_MSDOS`.
- **`RarEntry::HOST_OS2`** — If the return value of `RarEntry::getHostOs()` equals this constant, OS/2 was used to add this entry. Intended to replace `RAR_HOST_OS2`.
- **`RarEntry::HOST_WIN32`** — If the return value of `RarEntry::getHostOs()` equals this constant, Microsoft Windows was used to add this entry. Intended to replace `RAR_HOST_WIN32`.
- **`RarEntry::HOST_UNIX`** — If the return value of `RarEntry::getHostOs()` equals this constant, an unspecified UNIX OS was used to add this entry. Intended to replace `RAR_HOST_UNIX`.
- **`RarEntry::HOST_MACOS`** — If the return value of `RarEntry::getHostOs()` equals this constant, Mac OS was used to add this entry.
- **`RarEntry::HOST_BEOS`** — If the return value of `RarEntry::getHostOs()` equals this constant, BeOS was used to add this entry. Intended to replace `RAR_HOST_BEOS`.
- **`RarEntry::ATTRIBUTE_WIN_READONLY`** — Bit that represents a Windows entry with a read-only attribute. To be used with `RarEntry::getAttr()` on entries whose host OS is Microsoft Windows.
- **`RarEntry::ATTRIBUTE_WIN_HIDDEN`** — Bit that represents a Windows entry with a hidden attribute. To be used with `RarEntry::getAttr()` on entries whose host OS is Microsoft Windows.
- **`RarEntry::ATTRIBUTE_WIN_SYSTEM`** — Bit that represents a Windows entry with a system attribute. To be used with `RarEntry::getAttr()` on entries whose host OS is Microsoft Windows.
- **`RarEntry::ATTRIBUTE_WIN_DIRECTORY`** — Bit that represents a Windows entry with a directory attribute (entry is a directory). To be used with `RarEntry::getAttr()` on entries whose host OS is Microsoft Windows. See also `RarEntry::isDirectory()`, which also works with entries that were not added in WinRAR.
- **`RarEntry::ATTRIBUTE_WIN_ARCHIVE`** — Bit that represents a Windows entry with an archive attribute. To be used with `RarEntry::getAttr()` on entries whose host OS is Microsoft Windows.
- **`RarEntry::ATTRIBUTE_WIN_DEVICE`** — Bit that represents a Windows entry with a device attribute. To be used with `RarEntry::getAttr()` on entries whose host OS is Microsoft Windows.
- **`RarEntry::ATTRIBUTE_WIN_NORMAL`** — Bit that represents a Windows entry with a normal file attribute (entry is NOT a directory). To be used with `RarEntry::getAttr()` on entries whose host OS is Microsoft Windows. See also `RarEntry::isDirectory()`, which also works with entries that were not added in WinRAR.
- **`RarEntry::ATTRIBUTE_WIN_TEMPORARY`** — Bit that represents a Windows entry with a temporary attribute. To be used with `RarEntry::getAttr()` on entries whose host OS is Microsoft Windows.
- **`RarEntry::ATTRIBUTE_WIN_SPARSE_FILE`** — Bit that represents a Windows entry with a sparse file attribute (file is an NTFS sparse file). To be used with `RarEntry::getAttr()` on entries whose host OS is Microsoft Windows.
- **`RarEntry::ATTRIBUTE_WIN_REPARSE_POINT`** — Bit that represents a Windows entry with a reparse point attribute (entry is an NTFS reparse point, e.g. a directory junction or a mount file system). To be used with `RarEntry::getAttr()` on entries whose host OS is Microsoft Windows.
- **`RarEntry::ATTRIBUTE_WIN_COMPRESSED`** — Bit that represents a Windows entry with a compressed attribute (NTFS only). To be used with `RarEntry::getAttr()` on entries whose host OS is Microsoft Windows.
- **`RarEntry::ATTRIBUTE_WIN_OFFLINE`** — Bit that represents a Windows entry with an offline attribute (entry is offline and not accessible). To be used with `RarEntry::getAttr()` on entries whose host OS is Microsoft Windows.
- **`RarEntry::ATTRIBUTE_WIN_NOT_CONTENT_INDEXED`** — Bit that represents a Windows entry with a not content indexed attribute (entry is to be indexed). To be used with `RarEntry::getAttr()` on entries whose host OS is Microsoft Windows.
- **`RarEntry::ATTRIBUTE_WIN_ENCRYPTED`** — Bit that represents a Windows entry with an encrypted attribute (NTFS only). To be used with `RarEntry::getAttr()` on entries whose host OS is Microsoft Windows.
- **`RarEntry::ATTRIBUTE_WIN_VIRTUAL`** — Bit that represents a Windows entry with a virtual attribute. To be used with `RarEntry::getAttr()` on entries whose host OS is Microsoft Windows.
- **`RarEntry::ATTRIBUTE_UNIX_WORLD_EXECUTE`** — Bit that represents a UNIX entry that is world executable. To be used with `RarEntry::getAttr()` on entries whose host OS is UNIX.
- **`RarEntry::ATTRIBUTE_UNIX_WORLD_WRITE`** — Bit that represents a UNIX entry that is world writable. To be used with `RarEntry::getAttr()` on entries whose host OS is UNIX.
- **`RarEntry::ATTRIBUTE_UNIX_WORLD_READ`** — Bit that represents a UNIX entry that is world readable. To be used with `RarEntry::getAttr()` on entries whose host OS is UNIX.
- **`RarEntry::ATTRIBUTE_UNIX_GROUP_EXECUTE`** — Bit that represents a UNIX entry that is group executable. To be used with `RarEntry::getAttr()` on entries whose host OS is UNIX.
- **`RarEntry::ATTRIBUTE_UNIX_GROUP_WRITE`** — Bit that represents a UNIX entry that is group writable. To be used with `RarEntry::getAttr()` on entries whose host OS is UNIX.
- **`RarEntry::ATTRIBUTE_UNIX_GROUP_READ`** — Bit that represents a UNIX entry that is group readable. To be used with `RarEntry::getAttr()` on entries whose host OS is UNIX.
- **`RarEntry::ATTRIBUTE_UNIX_OWNER_EXECUTE`** — Bit that represents a UNIX entry that is owner executable. To be used with `RarEntry::getAttr()` on entries whose host OS is UNIX.
- **`RarEntry::ATTRIBUTE_UNIX_OWNER_WRITE`** — Bit that represents a UNIX entry that is owner writable. To be used with `RarEntry::getAttr()` on entries whose host OS is UNIX.
- **`RarEntry::ATTRIBUTE_UNIX_OWNER_READ`** — Bit that represents a UNIX entry that is owner readable. To be used with `RarEntry::getAttr()` on entries whose host OS is UNIX.
- **`RarEntry::ATTRIBUTE_UNIX_STICKY`** — Bit that represents the UNIX sticky bit. To be used with `RarEntry::getAttr()` on entries whose host OS is UNIX.
- **`RarEntry::ATTRIBUTE_UNIX_SETGID`** — Bit that represents the UNIX setgid attribute. To be used with `RarEntry::getAttr()` on entries whose host OS is UNIX.
- **`RarEntry::ATTRIBUTE_UNIX_SETUID`** — Bit that represents the UNIX setuid attribute. To be used with `RarEntry::getAttr()` on entries whose host OS is UNIX.
- **`RarEntry::ATTRIBUTE_UNIX_FINAL_QUARTET`** — Mask to isolate the last four bits (nibble) of UNIX attributes (_S_IFMT, the type of file mask). To be used with `RarEntry::getAttr()` on entries whose host OS is UNIX and with the constants `RarEntry::ATTRIBUTE_UNIX_FIFO`, `RarEntry::ATTRIBUTE_UNIX_CHAR_DEV`, `RarEntry::ATTRIBUTE_UNIX_DIRECTORY`, `RarEntry::ATTRIBUTE_UNIX_BLOCK_DEV`, `RarEntry::ATTRIBUTE_UNIX_REGULAR_FILE`, `RarEntry::ATTRIBUTE_UNIX_SYM_LINK` and `RarEntry::ATTRIBUTE_UNIX_SOCKET`.
- **`RarEntry::ATTRIBUTE_UNIX_FIFO`** — Unix FIFOs will have attributes whose last four bits have this value. To be used with `RarEntry::getAttr()` on entries whose host OS is UNIX and with the constant `RarEntry::ATTRIBUTE_UNIX_FINAL_QUARTET`.
- **`RarEntry::ATTRIBUTE_UNIX_CHAR_DEV`** — Unix character devices will have attributes whose last four bits have this value. To be used with `RarEntry::getAttr()` on entries whose host OS is UNIX and with the constant `RarEntry::ATTRIBUTE_UNIX_FINAL_QUARTET`.
- **`RarEntry::ATTRIBUTE_UNIX_DIRECTORY`** — Unix directories will have attributes whose last four bits have this value. To be used with `RarEntry::getAttr()` on entries whose host OS is UNIX and with the constant `RarEntry::ATTRIBUTE_UNIX_FINAL_QUARTET`. See also `RarEntry::isDirectory()`, which also works with entries that were added in other operating systems.
- **`RarEntry::ATTRIBUTE_UNIX_BLOCK_DEV`** — Unix block devices will have attributes whose last four bits have this value. To be used with `RarEntry::getAttr()` on entries whose host OS is UNIX and with the constant `RarEntry::ATTRIBUTE_UNIX_FINAL_QUARTET`.
- **`RarEntry::ATTRIBUTE_UNIX_REGULAR_FILE`** — Unix regular files (not directories) will have attributes whose last four bits have this value. To be used with `RarEntry::getAttr()` on entries whose host OS is UNIX and with the constant `RarEntry::ATTRIBUTE_UNIX_FINAL_QUARTET`. See also `RarEntry::isDirectory()`, which also works with entries that were added in other operating systems.
- **`RarEntry::ATTRIBUTE_UNIX_SYM_LINK`** — Unix symbolic links will have attributes whose last four bits have this value. To be used with `RarEntry::getAttr()` on entries whose host OS is UNIX and with the constant `RarEntry::ATTRIBUTE_UNIX_FINAL_QUARTET`.
- **`RarEntry::ATTRIBUTE_UNIX_SOCKET`** — Unix sockets will have attributes whose last four bits have this value. To be used with `RarEntry::getAttr()` on entries whose host OS is UNIX and with the constant `RarEntry::ATTRIBUTE_UNIX_FINAL_QUARTET`.
