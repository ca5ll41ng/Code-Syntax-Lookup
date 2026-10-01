---
id: "python-en-function-winreg-savekey"
language: "python"
lang: "en"
category: "function"
name: "SaveKey"
signature: "SaveKey(key, file_name)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/3/library/winreg.html#winreg.SaveKey"
license: "PSF"
updated: "2026-10-01"
---

# SaveKey

Saves the specified key, and all its subkeys to the specified file.

*key* is an already open key, or one of the predefined
`HKEY_* constants`.

*file_name* is the name of the file to save registry data to.  This file
cannot already exist. If this filename includes an extension, it cannot be
used on file allocation table (FAT) file systems by the `LoadKey`
method.

If *key* represents a key on a remote computer, the path described by
*file_name* is relative to the remote computer. The caller of this method must
possess the **SeBackupPrivilege** security privilege.  Note that
privileges are different than permissions -- see the
`Conflicts Between User Rights and Permissions documentation
<https://msdn.microsoft.com/en-us/library/ms724878%28v=VS.85%29.aspx>`__
for more details.

This function passes `NULL` for *security_attributes* to the API.

audit-event:: winreg.SaveKey key,file_name winreg.SaveKey
