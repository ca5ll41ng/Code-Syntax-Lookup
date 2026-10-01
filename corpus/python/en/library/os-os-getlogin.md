---
id: "python-en-function-os-getlogin"
language: "python"
lang: "en"
category: "function"
name: "getlogin"
signature: "getlogin()"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.getlogin"
license: "PSF"
updated: "2026-10-01"
---

# getlogin

Return the name of the user logged in on the controlling terminal of the
process.  For most purposes, it is more useful to use
`getpass.getuser` since the latter checks the environment variables
`LOGNAME` or `USERNAME` to find out who the user is, and
falls back to `pwd.getpwuid(os.getuid()).pw_name` to get the login name of the
current real user id.

availability:: Unix, Windows, not WASI.
