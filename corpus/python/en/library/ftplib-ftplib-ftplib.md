---
id: "python-en-function-ftplib-ftplib"
language: "python"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["B402"],"cwe":["CWE-319"],"note":"A FTP-related module is being imported.  FTP is considered insecure. Use SSH/SFTP/SCP or some other encrypted protocol."}
name: "ftplib"
title: "Module `netrc`"
directive: "module"
module: "ftplib"
source_url: "https://docs.python.org/3/library/ftplib.html#module-ftplib"
license: "PSF"
updated: "2026-10-01"
---

# Module `netrc`

> **Seealso**
>
> Module `netrc`
>    Parser for the `.netrc` file format.  The file `.netrc` is
>    typically used by FTP clients to load user authentication information
>    before prompting the user.
>
