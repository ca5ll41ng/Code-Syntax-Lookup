---
id: "python-en-function-pathlib-path-touch"
language: "python"
lang: "en"
category: "function"
name: "Path.touch"
signature: "Path.touch(mode=0o666, exist_ok=True)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.Path.touch"
license: "PSF"
updated: "2026-10-01"
---

# Path.touch

Create a file at this given path.  If *mode* is given, it is combined
with the process's `umask` value to determine the file mode and access
flags.  If the file already exists, the function succeeds when *exist_ok*
is true (and its modification time is updated to the current time),
otherwise `FileExistsError` is raised.

> **Seealso**
>
> The `~Path.open`, `~Path.write_text` and
> `~Path.write_bytes` methods are often used to create files.
>
